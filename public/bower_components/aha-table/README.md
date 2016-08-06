# &lt;aha-table&gt; ![Bower Version](https://badge.fury.io/bo/aha-table.svg)

> A Polymer element for a searchable, sortable, paginatable, inline-editable, selectable, copyable, removable, movable table/grid.

## Demo

[Check it live!](http://liuwenchao.github.io/aha-table)

[Performance Test!](http://liuwenchao.github.io/aha-table/demo/performance.html)


## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install aha-table --save
```

Or [download as ZIP](https://github.com/liuwenchao/aha-table/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/aha-table/dist/aha-table.html">
    ```

3. Start using it!

    ```html
    <aha-table></aha-table>
    ```

    ```html
    <aha-table
          selectable
          copyable
          removable
          movable
          seachable
          pagesize="20"
          pagesizetitle="Page Size:"
          summarytitle="Viewing">

          <aha-column name="title"
              type="string"
              sortable
              searchable
              required
              placeholder="Empty Field Placeholder Text"
              default=""
              hint="a hint in column header">
          </aha-column>
     </aha-table>
    ```

## &lt;aha-table&gt;

### Options

Attribute       | Options       | Default   | Description
---             | ---           | ---       | ---
`data`          | *Array*       | []        | data for this table, need to set in JS.
`selectable`    | *Boolean*     | False     | if selection box is displayed
`searchable`    | *Boolean*     | False      | if search row is displayed
`copyable`      | *Boolean*     | False      | if copy handler is displayed
`removable`     | *Boolean*     | False      | if remove handler is displayed
`movable`       | *Boolean*     | False      | if move up/down handler is displayed
`pagesize`      | *Number*      | 10        | record set size for each page
`data-sizelist` | *Array*       | [5, 10, 20, 50, 100]      | list for page size dropdown
`selecttitle`   | *String*      | ''        | title for select checkbox
`selectalltitle`| *String*      | ''        | title for selectall checkbox
`copytitle`     | *String*      | ''        | title for copy indicator
`removetitle`   | *String*      | ''        | title for remove indicator
`movedowntitle` | *String*      | ''        | title for move down indicator
`moveuptitle`   | *String*      | ''        | title for move up indicator
`sorttitle`     | *String*      | ''        | title for sortable column
`edittitle`     | *String*      | ''        | title for editable data cell
`searchtitle`   | *String*      | ''        | title for search filter row toggler
`firsttitle`    | *String*      | ''        | title for first page clicker
`previoustitle` | *String*      | ''        | title for previous page clicker
`nexttitle`     | *String*      | ''        | title for next page clicker
`lasttitle`     | *String*      | ''        | title for last page clicker
`pagetext`      | *String*      | ''        | text before current page number
`pageoftext`    | *String*      | ''        | text between page range and total page number
`pagesizetext`  | *String*      | ''        | text before page size dropdown
`summarytitle`  | *String*      | ''        | text before pagination summary
`itemoftext`    | *String*      | ''        | text between item count range and total item number


## Events

Name                    | Arguments | Description
---                     | ---       | ---
`after-invalid`         | `Event`   | call after saving a cell by it's invalid
`after-td-click`        | `Event`   | call after user click a cell, usually after this cell is editable
`after-td-dbclick`      | `Event`   | call after user dbclick a cell
`before-create`         | `Event`   | call before a record is created internally
`after-create`          | `Event`   | call after a record is created internally
`before-copy`           | `Event`   | call before a record is copyed from another internally
`after-copy`            | `Event`   | call after a record is copyed from another internally
`before-save`           | `Event`   | call before a record is saved from another internally
`after-save`            | `Event`   | call after a record is saved from another internally
`before-select`         | `Event`   | call before a record is selected
`after-select`          | `Event`   | call after a record is selected
`before-remove`         | `Event`   | call before a record is removed internally
`after-remove`          | `Event`   | call after a record is removed internally
`before-move-down`      | `Event`   | call before a record is moved down
`after-move-down`       | `Event`   | call after a record is moved down
`before-move-up`        | `Event`   | call before a record is moved up
`after-move-up`         | `Event`   | call after a record is moved up


## &lt;aha-column&gt;

Provides you a declarative way to define column meta.

### Options

Attribute           | Options                   | Default               | Description
---                 | ---                       | ---                   | ---
`name`              | *String*                  | ''                    | name of the column
`label`             | *String*                  | ''                    | this text woll be displayed as the column name in table header.
`type`              | *String*                  | ''                    | one of: string, text, choice, boolean, date, time, datetime
`sortable`          | *Boolean*                 | False                  | if this column is sortable
`searchable`        | *Boolean*                 | False                  | if this column is searchable
`editable`          | *Boolean*                 | False                  | if this column is editable
`required`          | *Boolean*                 | False                  | if this column is required, Event 'after-invalid' will be invoked
`placeholder`       | *String*                  | ''                    | this text will be displayed when this cell is empty
`default`           | *String*                  | ''                    | default value, applied at creation
`data-choices`      | *Array*                   | []                    | options for select dropdown, in editing and searching.
`hint`              | *String*                  | ''                    | this text will be displayed at the column header for instruction.
`searchplaceholder` | *String*                  | ''                    | this text will be displayed in search filter input box.
`renderer`          | *String*                  | undefined             | function name to format the object being displayed


## Browser Compatability

By following http://www.polymer-project.org/docs/polymer/databinding-compat.html ,
this should be working on all latest version of browsers.

![IE](https://raw.github.com/paulirish/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/paulirish/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/paulirish/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/paulirish/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/paulirish/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |


## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

2. Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

3. To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

4. Once you finish developing it, build the distribution files and publish it on Bower.

    ```sh
    $ grunt build
    $ bower register aha-table https://github.com/liuwenchao/aha-table
    ```

5. deploy

    ```sh
    $ git add * && git commit && git push
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/liuwenchao/aha-table/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
