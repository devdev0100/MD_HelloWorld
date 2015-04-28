var coalition = [];
var parliamentSize = 0;

var addParty = function() {
    var newPartyName = document.getElementById('newPartyNameInput').value;
    var newPartySeats = document.getElementById('newPartySeatsInput').value;
    addPartyToTable(newPartyName, newPartySeats);
    document.getElementById('newPartyNameInput').value = '';
    document.getElementById('newPartySeatsInput').value = '';

    // reset all, because the checkboxes are being reset when setting new innerHTML in 'addPartyToTable'
    coalition = [];
    var bar = document.getElementById('coalitionBar');
    bar.style.width = 0;
    bar.style.backgroundColor = 'darkred';
}

var addPartyToTable = function(newPartyName, newPartySeats) {
    var partyTable = document.getElementById('partyTable');
    contentString = '<tr><td><input id="checkbox_' + newPartyName + '" type="checkbox" onchange="changeParty(\'' + newPartyName + '\', \'' + newPartySeats + '\');"/></td><td>' + newPartyName + '</td><td>' + newPartySeats + '</td></tr>'
    partyTable.innerHTML += contentString;
    parliamentSize += parseInt(newPartySeats);
}

var findIndexOfPartyInParliament = function(partyName) {
    for (i = 0; i < coalition.length; i++) {
        if (coalition[i][0] == partyName) {
            return i;
        }
    }
    return -1;
}

var changeParty = function(partyName, partySeats) {
    var elem = [partyName, parseInt(partySeats)];
    var checked = document.getElementById('checkbox_' + partyName).checked;
    if (checked) {
        coalition.push(elem);
    }
    else {
        var index = findIndexOfPartyInParliament(partyName);
        coalition.splice(index, 1);
    }

    updateCoalitionBar();
}

var updateCoalitionBar = function() {
    var bar = document.getElementById('coalitionBar');
    var coalitionSize = 0;
    for (i = 0; i < coalition.length; i++) {
        coalitionSize += coalition[i][1];
    }
    if (coalitionSize == 0) {
        bar.style.width = 0;
    }
    else {
        bar.style.width = (1000 * coalitionSize / parliamentSize) + 'px';
        if (isValidCoalitionSize(coalitionSize)) {
            bar.style.backgroundColor = 'navy';
        }
        else {
            bar.style.backgroundColor = 'darkred';
        }
    }
}

var isValidCoalitionSize = function(coalitionSize) {
    if (coalitionSize > parliamentSize / 2) {
        return true;
    }
    return false;
}