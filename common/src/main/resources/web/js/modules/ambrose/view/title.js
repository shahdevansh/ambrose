/*
Copyright 2012 Twitter, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * This module defines the Title view which generates title for the workflow page
 */
define(['lib/jquery', '../core', './core'], function($, Ambrose, View) {
  var Title = View.Title = function(workflow, container) {
    return new View.Title.fn.init(workflow, container);
  };

  Title.fn = Title.prototype = {
    /**
     * Constructor.
     *
     * @param workflow the Workflow instance to bind to.
     * @param container the DOM element in which to render the view.
     */
    init: function(workflow, container) {
      var idParts = workflow.id.split("!");
      var cluster = idParts[0];
      var user = idParts[1];
      var jobName = idParts[2];
      container = $(container).empty().addClass('ambrose-view-progress-bar');
      var title = $('<h2>').appendTo(container).text(jobName);
      var info = $('<span>').appendTo(container).html("user <em>" + user + "</em> on cluster <em>" + cluster + "</em>");
    },
  };

  // bind prototype to ctor
  Title.fn.init.prototype = Title.fn;
  return Title;
});