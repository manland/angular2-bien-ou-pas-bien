import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import {Service} from "../annotation/Service";

@Service()
export class StaticServer {
    start() {
        http.createServer(function (request, response) {
            let filePath = request.url;

            if (filePath === '/' || filePath === '') {
                filePath = '/index.html';
            }

            const extname = path.extname(filePath);
            let contentType = 'text/html';
            switch (extname) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                    contentType = 'image/jpg';
                    break;
                case '.wav':
                    contentType = 'audio/wav';
                    break;
                case '.svg':
                    contentType = 'image/svg+xml';
                    break;
            }

            fs.readFile(path.resolve(__dirname, `../../client${filePath}`), (error, content) => {
                if (error) {
                    if(error.code == 'ENOENT') {
                        fs.readFile(path.resolve(__dirname, `../../${filePath}`), (error, content) => {//TODO better management for shared
                            if (error) {
                                if(error.code == 'ENOENT') {
                                    if(filePath.indexOf('/theory') === 0) {//TODO find better to search in node_modules
                                        filePath = filePath.substring(7);
                                    }
                                    fs.readFile(path.resolve(__dirname, `../../../node_modules/${filePath}`), (error, content) => {//TODO better management for shared
                                        if (error) {
                                            if (error.code == 'ENOENT') {
                                                console.error('404 NOT FOUND', path.resolve(__dirname, `../../client${filePath}`));
                                                response.writeHead(404);
                                                response.end();
                                            } else {
                                                response.writeHead(500);
                                                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                                                response.end();
                                            }
                                        } else {
                                            response.writeHead(200, { 'Content-Type': contentType });
                                            response.end(content, 'utf-8');
                                        }
                                    });
                                } else {
                                    response.writeHead(500);
                                    response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                                    response.end();
                                }
                            } else {
                                response.writeHead(200, { 'Content-Type': contentType });
                                response.end(content, 'utf-8');
                            }
                        });
                    } else {
                        response.writeHead(500);
                        response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                        response.end();
                    }
                } else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });

        }).listen(8125);
        console.log('Server running at http://127.0.0.1:8125/');
    }
}