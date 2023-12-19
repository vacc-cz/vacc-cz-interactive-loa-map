# Interactive Map of Letter of Agreement of VACC-CZ

This repository contains source files of Interactive Map of Agreement of VACC-CZ.

## Configuration

Before you start, you need to configure the project.

Two configuration files are used:

* `config/config.json` - Configuration of the map
* `config/sector_file.sct` - EuroScope sector file

* Example configuration files are located in `config/examples` directory.

### Structure of `config/config.json`

* `dimensions` _(object)_ - Dimensions of the map
    * `width` _(number)_ - Width in pixels
    * `height` _(number)_ - Height in pixels
* `viewport` - _(object)_ - Visible area of the map
    * `minLatitude` _(number)_ - Minimum latitude
    * `maxLatitude` _(number)_ - Maximum latitude
    * `minLongitude` _(number)_ - Minimum longitude
    * `maxLongitude` _(number)_ - Maximum longitude
* `airspaces` _(object)_ - Airspaces to be displayed
    * `primary` _(array)_ - Primary airspaces (typically FSS/CTR sectors)
        * `name` _(string)_ - Name from the sector file
        * `type` _(string)_ - Type {`artcc`, `artccLow`, `artccHigh`}
    * `secondary` _(array)_ - Secondary airspaces (typically APP sectors)
        * `name` _(string)_ - Name from the sector file
        * `type` _(string)_ - Type {`artcc`, `artccLow`, `artccHigh`}
    * `other` _(array)_ - Other airspaces (typically neighboring sectors)
        * `name` _(string)_ - Name from the sector file
        * `type` _(string)_ - Type {`artcc`, `artccLow`, `artccHigh`}
* `points` _(array)_ - Points to be rendered as square
    * `fir` _(string)_ - Code of the FIR
    * `name` _(string)_ - Name from the sector file
    * `position` _(string)_ - Position of the label relative to rendered points {`bottom`, `bottomLeft`, `bottomRight`, `left`, `right`, `top`, `topLeft`, `topRight`}
    * `inboundCoordination` _(object)_ - Inbound coordination
        * `data` _(array)_ - Points of the inbound coordination
            * `type` _(string)_ - Type  {`departure`, `arrival`}
            * `text` _(string)_[optional] - Text
            * `level` _(number)_[optional] - Exact level
            * `levelAbove` _(number)_[optional] - Level above
            * `levelBellow` _(number)_[optional] - Level bellow
            * `levelDown` _(number)_[optional] - Level down
            * `levelMax` _(number)_[optional] - Max level
            * `levelUp` _(number)_[optional] - Level up
            * `note` _(string)_[optional]_ - Note
        * `note` _(string)_[optional]_ - Note  
    * `outboundCoordination` _(object)_ - Outbound coordination
        * `data` _(array)_ - Points of the outbound coordination
            * `type` _(string)_ - Type  {`departure`, `arrival`}
            * `text` _(string)_[optional] - Custom text
            * `level` _(number)_[optional] - Exact level
            * `levelAbove` _(number)_[optional] - Level above
            * `levelBellow` _(number)_[optional] - Level bellow
            * `levelDown` _(number)_[optional] - Level down
            * `levelMax` _(number)_[optional] - Max level
            * `levelUp` _(number)_[optional] - Level up
            * `note` _(string)_[optional]_ - Note
            * `note` _(string)_[optional]_ - Note
* `boundaryPoints`  _(array)_ - Boundary to be rendered as button
    * `name` _(string)_ - Label of the button
    * `latitude` _(string)_ - Latitude where the button is rendered (format: `N049.80.00.000`)
    * `longitude` _(string)_ - Longitude where the button is rendered (format: `E013.30.00.000`)
    * `coordination` _(object)_
        * `data` _(array)_ - Points of the coordination 
            * `type` _(string)_ - Type  {`departure`, `arrival`}
            * `text` _(string)_[optional] - Custom text
            * `level` _(number)_[optional] - Exact level
            * `levelAbove` _(number)_[optional] - Level above
            * `levelBellow` _(number)_[optional] - Level bellow
            * `levelDown` _(number)_[optional] - Level down
            * `levelMax` _(number)_[optional] - Max level
            * `levelUp` _(number)_[optional] - Level up
            * `note` _(string)_[optional]_ - Note

## Build
 
To build the project:
 
1. Install local npm packages: `npm install`
2. Run the build `npm run build`

Built files are located in `/public` directory.
 
## Development
 
To run the dev server:

1. Install local npm packages: `npm install`
2. Run the build `npm start`
