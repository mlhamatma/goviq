'use strict'

function process(){
    const Engine = require('velocity').Engine

    var date = new Date()
    var output_file_name = "Sample_" + date.getUTCHours() + "_" + date.getUTCMinutes() + "_" + date.getUTCSeconds() + ".txt"
    // var inline_velocity_config = {
    //     debug: true,
    //     data: false,
    //     root: './',
    //     template: './templates/email.vm',
    //     output: output_file_name
    // }

    var inline_velocity_config = require('./velocity-config')
    var engine = new Engine(inline_velocity_config)


    var context = require('./formstack')
    context = require('./lib/formstack_converter').convert_formstack_json_to_velocity_json(context)

    var result = engine.render(context)

    console.log("Here is the result from context:\n" + JSON.stringify(context) + "\n")
    console.log("Here is the results:\n" + result)
}