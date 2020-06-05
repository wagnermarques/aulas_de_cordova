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

    selectedContact : "asdf",
    
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('resume', this.onResume.bind(this), false);        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //alert(navigator.contacts);
        document.getElementById("bntSelContato").addEventListener("click", this.selecionaContato); 
        document.getElementById("bntShowContact").addEventListener("click", this.alertSelectedContact);
    },
    onResume :function(resumeEvent) {
        alert("onResume :function(resumeEvent) {...");
        if(resumeEvent.pendingResult) {
            if(resumeEvent.pendingResult.pluginStatus === "OK") {
                var contact = navigator.contacts.create(resumeEvent.pendingResult.result);
                this.successCallback(contact);
            } else {                
                this.failCallback(resumeEvent.pendingResult.result);
            }
        }
    },
    successCallback : function(contact){
        this.selectedContact = contact;
        alert(JSON.stringify(contact));
    },
    failCallback : function(err){
        alert(err);
    },
    alertSelectedContact: function(){
        alert(JSON.stringify(app.selectedContact));
    },
    
    selecionaContato: function(){
        navigator.contacts.pickContact(function(contact){
            //alert('The following contact has been selected:' + JSON.stringify(contact));
            //alert("Contact:"+contact);
            app.selectedContact = "contact...";
        },function(err){
            //alert('Error: ' + err);
            //alert("err:"+err);
            app.selectedContact = "err...";
        });
    }

};

app.initialize();
