import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import {Service} from "../annotation/Service";
import {IncomingMessage, ServerResponse} from "http";
import {Promise} from 'es6-shim';

@Service()
export class StaticServer {

    static CONTENT_TYPES: {[extname: string]: string} = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav'
    };

    static DIRECTORIES: Array<string> = [
        '0-theory', '1-firstCompo', '2-useCompo', '3-httpService', '4-firstService', '4.1-firstServiceInterface',
        '5-firstRoute', '5.1-firstRouteOneServer', '6-firstForm', '7-firstDirective'
    ];

    start() {
        http.createServer((request: IncomingMessage, response: ServerResponse) => {
            let filePath = request.url;
            const directory = StaticServer.DIRECTORIES.find((dir: string) => filePath.indexOf(`/${dir}`) === 0);
            if (filePath === '/' || filePath === '') {
                filePath = filePath + '/index.html';
            } else if (directory && filePath === `/${directory}/`) {
                filePath = `/${directory}/index.html`;
            }

            this.sendFile(response, path.resolve(__dirname, `../../${filePath}`))
                .catch(() => this.sendFile(response, path.resolve(__dirname, `../../${filePath}`)))
                .catch(() => this.sendFile(response, path.resolve(__dirname, `../../client${filePath}`)))
                .catch(() => {
                    if(directory) {
                        filePath = filePath.substring(`/${directory}`.length);
                    }
                    return this.sendFile(response, path.resolve(__dirname, `../../../node_modules${filePath}`));
                })
                .catch(() => {
                    console.error('404 NOT FOUND', filePath);
                    response.writeHead(404);
                    response.end();
                });

        }).listen(8122);
        console.log('Server running at http://127.0.0.1:8122/');
    }

    private sendFile(response: ServerResponse, absolutePathFile: string): Promise<void> {
        const contentType = StaticServer.CONTENT_TYPES[path.extname(absolutePathFile)] || 'text/html';
        return new Promise<void>((resolve: () => any, reject: (error?: any) => any) => {
            fs.readFile(absolutePathFile, (error, content) => {
                if (error) {
                    if(error.code == 'ENOENT') {
                        reject(404);
                    } else {
                        response.writeHead(500);
                        response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                        response.end();
                        reject(500);
                    }
                } else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                    resolve();
                }
            });
        });
    }
}