function Init() {
	GetRequest();
	document.getElementById("SearchBar").focus();
}

function sortTable(tableName, n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  
  table = document.getElementById(tableName);
  switching = true;
  dir = "asc"; 
  
  while (switching) {
    switching = false;
	
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;    
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function SearchTables() {
	var SearchBar, tr, td, i, txtValue;
	
	SearchBar = document.getElementById("SearchBar").value.toUpperCase();
	
	//Veiled
	tr = document.getElementById("VeiledTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
	//Kitguns
	tr = document.getElementById("KitgunTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
	//Melee
	tr = document.getElementById("MeleeTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
	//Pistol
	tr = document.getElementById("PistolTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
	//Rifle
	tr = document.getElementById("RifleTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
	//Shotgun
	tr = document.getElementById("ShotgunTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
	//Zaw
	tr = document.getElementById("ZawTable").getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(SearchBar) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}       
	}
}

function ParseRequest() {
	// Begin accessing JSON data here
	var RequestData = JSON.parse(Request.response);
	if (Request.status >= 200 && Request.status < 400) {
		var DIVText = "";
		RequestData.forEach(item => {
		
			if (item.compatibility == null) {
				var row = VeiledTable.insertRow(-1);
				var name = row.insertCell(0);
				var avg = row.insertCell(1);
				var stddev = row.insertCell(2);
				var min = row.insertCell(3);
				var max = row.insertCell(4);
				var pop = row.insertCell(5);
				
				name.innerHTML = item.itemType;
				avg.innerHTML = Math.round(item.avg);
				stddev.innerHTML = Math.round(item.stddev);
				min.innerHTML = Math.round(item.min);
				max.innerHTML = Math.round(item.max);
				pop.innerHTML = item.pop.toFixed(2) + "%";
			} else {
				if (item.itemType === "Kitgun Riven Mod") {
					if (item.rerolled == false) {
						var row = KitgunTable.insertRow(-1);
						var names = row.insertCell(0);
						var avg = row.insertCell(1);
						var stddev = row.insertCell(2);
						var min = row.insertCell(3);
						var max = row.insertCell(4);
						var pop = row.insertCell(5);
							
						names.innerHTML = item.compatibility;
						avg.innerHTML = Math.round(item.avg);
						stddev.innerHTML = Math.round(item.stddev);
						min.innerHTML = Math.round(item.min);
						max.innerHTML = Math.round(item.max);
						pop.innerHTML = item.pop.toFixed(2) + "%";
					} else {
						var row = KitgunTable.rows[KitgunTable.rows.length-1]
						
						row.cells[1].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.avg);
						row.cells[2].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.stddev);
						row.cells[3].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.min);
						row.cells[4].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.max);
						row.cells[5].innerHTML += "\xa0\xa0|\xa0\xa0" + item.pop.toFixed(2) + "%";
					}
				} else if (item.itemType === "Melee Riven Mod") {
					if (item.rerolled == false) {
						var row = MeleeTable.insertRow(-1);
						var names = row.insertCell(0);
						var avg = row.insertCell(1);
						var stddev = row.insertCell(2);
						var min = row.insertCell(3);
						var max = row.insertCell(4);
						var pop = row.insertCell(5);
							
						names.innerHTML = item.compatibility;
						avg.innerHTML = Math.round(item.avg);
						stddev.innerHTML = Math.round(item.stddev);
						min.innerHTML = Math.round(item.min);
						max.innerHTML = Math.round(item.max);
						pop.innerHTML = item.pop.toFixed(2) + "%";
					} else {
						var row = MeleeTable.rows[MeleeTable.rows.length-1]
						
						row.cells[1].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.avg);
						row.cells[2].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.stddev);
						row.cells[3].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.min);
						row.cells[4].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.max);
						row.cells[5].innerHTML += "\xa0\xa0|\xa0\xa0" + item.pop.toFixed(2) + "%";
					}
				} else if (item.itemType === "Pistol Riven Mod") {
					if (item.rerolled == false) {
						var row = PistolTable.insertRow(-1);
						var names = row.insertCell(0);
						var avg = row.insertCell(1);
						var stddev = row.insertCell(2);
						var min = row.insertCell(3);
						var max = row.insertCell(4);
						var pop = row.insertCell(5);
							
						names.innerHTML = item.compatibility;
						avg.innerHTML = Math.round(item.avg);
						stddev.innerHTML = Math.round(item.stddev);
						min.innerHTML = Math.round(item.min);
						max.innerHTML = Math.round(item.max);
						pop.innerHTML = item.pop.toFixed(2) + "%";
					} else {
						var row = PistolTable.rows[PistolTable.rows.length-1]
						
						row.cells[1].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.avg);
						row.cells[2].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.stddev);
						row.cells[3].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.min);
						row.cells[4].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.max);
						row.cells[5].innerHTML += "\xa0\xa0|\xa0\xa0" + item.pop.toFixed(2) + "%";
					}
				} else if (item.itemType === "Rifle Riven Mod") {
					if (item.rerolled == false || item.compatibility === "ARTAX") {
						var row = RifleTable.insertRow(-1);
						var names = row.insertCell(0);
						var avg = row.insertCell(1);
						var stddev = row.insertCell(2);
						var min = row.insertCell(3);
						var max = row.insertCell(4);
						var pop = row.insertCell(5);
							
						names.innerHTML = item.compatibility;
						avg.innerHTML = Math.round(item.avg);
						stddev.innerHTML = Math.round(item.stddev);
						min.innerHTML = Math.round(item.min);
						max.innerHTML = Math.round(item.max);
						pop.innerHTML = item.pop.toFixed(2) + "%";
					} else {
						var row = RifleTable.rows[RifleTable.rows.length-1]
						
						row.cells[1].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.avg);
						row.cells[2].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.stddev);
						row.cells[3].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.min);
						row.cells[4].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.max);
						row.cells[5].innerHTML += "\xa0\xa0|\xa0\xa0" + item.pop.toFixed(2) + "%";
					}
				} else if (item.itemType === "Shotgun Riven Mod") {
					if (item.rerolled == false) {
						var row = ShotgunTable.insertRow(-1);
						var names = row.insertCell(0);
						var avg = row.insertCell(1);
						var stddev = row.insertCell(2);
						var min = row.insertCell(3);
						var max = row.insertCell(4);
						var pop = row.insertCell(5);
							
						names.innerHTML = item.compatibility;
						avg.innerHTML = Math.round(item.avg);
						stddev.innerHTML = Math.round(item.stddev);
						min.innerHTML = Math.round(item.min);
						max.innerHTML = Math.round(item.max);
						pop.innerHTML = item.pop.toFixed(2) + "%";
					} else {
						var row = ShotgunTable.rows[ShotgunTable.rows.length-1]
						
						row.cells[1].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.avg);
						row.cells[2].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.stddev);
						row.cells[3].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.min);
						row.cells[4].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.max);
						row.cells[5].innerHTML += "\xa0\xa0|\xa0\xa0" + item.pop.toFixed(2) + "%";
					}
				} else if (item.itemType === "Zaw Riven Mod") {
					if (item.rerolled == false) {
						var row = ZawTable.insertRow(-1);
						var names = row.insertCell(0);
						var avg = row.insertCell(1);
						var stddev = row.insertCell(2);
						var min = row.insertCell(3);
						var max = row.insertCell(4);
						var pop = row.insertCell(5);
							
						names.innerHTML = item.compatibility;
						avg.innerHTML = Math.round(item.avg);
						stddev.innerHTML = Math.round(item.stddev);
						min.innerHTML = Math.round(item.min);
						max.innerHTML = Math.round(item.max);
						pop.innerHTML = item.pop.toFixed(2) + "%";
					} else {
						var row = ZawTable.rows[ZawTable.rows.length-1]
						
						row.cells[1].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.avg);
						row.cells[2].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.stddev);
						row.cells[3].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.min);
						row.cells[4].innerHTML += "\xa0\xa0|\xa0\xa0" + Math.round(item.max);
						row.cells[5].innerHTML += "\xa0\xa0|\xa0\xa0" + item.pop.toFixed(2) + "%";
					}
				}
			}
		});
	}
}

function GetRequest() {
	Request = new XMLHttpRequest();
	Request.open('GET', 'http://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json', true);
	Request.onload = ParseRequest;
	Request.send();
}