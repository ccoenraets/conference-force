force.init({
    appId: '3MVG9xOCXq4ID1uHBRAO6uf8oDR5WpwXUPOVuilkbSimIRGkl60BhC6hdcNclUdFnJgmdIftypoyI.pe._Sr4',
    proxyURL: force.baseURL
});

function login() {
    force.login(
        function() {
            console.log('Salesforce login succeeded');
            getSessions();
        },
        function(error) {
            console.log(error);
            alert('Salesforce login failed');
        });
}

function getSessions() {
    var soql = "SELECT Id, Name, Session_Date__c FROM Session__c",
        html = '';
    force.query(soql,
        function (data) {
            var sessions = data.records;
            for (var i = 0; i < sessions.length; i++) {
                html += '<li class="table-view-cell">' + sessions[i].Name + '</li>';
            }
            $('.session-list').html(html);
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
    return false;
}

login();
