/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {


        $( document ).on( "pageinit", "#demo-page", function() {
            $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
                // We check if there is no open panel on the page because otherwise
                // a swipe to close the left panel would also open the right panel (and v.v.).
                // We do this by checking the data that the framework stores on the page element (panel: open).
                if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
                    if ( e.type === "swipeleft"  ) {
                        $( "#right-panel" ).panel( "open" );
                    } else if ( e.type === "swiperight" ) {
                        $( "#left-panel" ).panel( "open" );
                    }
                }
            });
        });
             
    }//receivedEvent: function(id) {
};

app.initialize();
