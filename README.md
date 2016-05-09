# isodash

> An isomorphic js dashboard framework.

Isodash permit to build dashboards. Its based on Fetchers (to get data) and Visualizers (to display it). Both are linked with an ergonomic Angular2 web-app.

# Development

## Requirements

* node > 4

## Procedure

```bash
npm install
npm run dev
```

Other terminal

```bash
node build/app/server/app.js
```

# Roadmap

## Version 1

* Globale Architecture
  * [x] [Fetcher](app/server/fetcher/Fetcher.ts)
  * [x] [Fetcher example](app/server/IDF/Test.ts)
  * [x] [Visualizer](app/client/visualizer/Visualizer.ts)
  * [x] [Visualizer example](app/client/IDV/TestIdv.ts)
  * [x] Communication [server->client](app/server/service/Client.ts) & [client->server](app/client/service/Server.ts)
  * [x] Configuration + [check](app/server/service/CheckFetcherOption.ts) (with a file server side in [isodash.conf.json](isodash.conf.json))
   
* Brick maker
  * [ ] Drag&Drop empty case -> open popup with visu
  * [ ] Popup visu to select one + select compatible fetcher(s) 
  * [ ] Add brick inside dashboard
  * [ ] Size + move a brick
  * [ ] Edit/Delete in editing mode
  
* Mode edit/Password
  * [ ] If a dashboard is in password mode (setting in conf server side), to edit it need to fill a password
  * [ ] When selecting an url without dashboard -> create it and user can configure it
  * [ ] If a no passworded dashboard is not seen during 48H (can ba a setting) delete it
 
* [ ] Install it to raspberry with restart auto

## Version 2

* Visualizers
  * [ ] map
  * [ ] charts 
    * [ ] camembert
    * [ ] line
    * [ ] bar
  * [ ] digital number
  * [ ] gauge
  * [ ] percent horizontal gauge
  * [ ] social (avatar, title, description => twitter, rss, wordpress...)
  * [ ] weather
  * [ ] clock
  * [ ] pictures
  
* Fetchers
  * [ ] piwik
  * [ ] elastic-search (ELK)
  * [ ] twitter
  * [ ] Facebook
  * [ ] rss
  * [ ] picture of a local directory
  * [ ] Coffee machine _(reserved by sam)_
  * [ ] Service rest (can be used internally to get plots, products, cultural-practices...)
  * [ ] Jenkins build status
  * [ ] [Trade (cac40) of soybean, corn, wheat, coffee...](https://github.com/manland/isodash/issues/1)

## Version 3

* DB to save data

* Plugin management
  * [ ] Fetchers can be installed with npm
  * [ ] Visualizers can be installed with npm
  * [ ] Fetchers + Visualizers can be installed at runtime
  
* Admin
  * [ ] All config is editable in an admin page
  * [ ] Fetchers + Visualizers can be installed in an admin page
  * [ ] All dashboard can be editable by an admin
