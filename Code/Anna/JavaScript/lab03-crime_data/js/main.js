// Object { Address: "9900 BLOCK OF SE MILL ST", "Case Number": "17-22122", "Crime Against": "Property", Neighborhood: "Hazelwood", "Number of Records": "1", "Occur Date": "1/1/17", "Occur Month Year": "1/1/17", "Occur Time": "0", "Offense Category": "Burglary", "Offense Count": "1", … }

let getData = document.querySelector("#get_data");
let getTable = document.querySelector("#bt_table");
let dataContainer = document.querySelector("#dataContainer");

$(document).ready(function() {
    console.log("Ready!");
   $('.selectpicker').selectpicker();   // makes the drop-down work
    // test button
    // $("#bt_now").click(function() {
    //     console.log("doing a thing");
    //     d3.csv("https://s3-us-west-2.amazonaws.com/web-hosted-files/test.csv", function(data) {
    //         // console.log(data);
    //         dataArray.push(data);
    //         let tr = document.createElement('tr');
    //         let tdAddress = document.createElement('td');
    //         let tdCaseNumber = document.createElement('td');
    //         let tdCrimeAgainst = document.createElement('td');
    //         let tdNeighborhood = document.createElement('td');
    //         let tdNumberRecords = document.createElement('td');
    //         let tdOccurDate = document.createElement('td');
    //         let tdOccurMonth = document.createElement('td');
    //         let tdOccurTime = document.createElement('td');
    //         let tdOffenseCategory = document.createElement('td');
    //         let tdOffenseCount = document.createElement('td');
    //
    //         let valArray = Object.values(data);
    //         tdAddress.innerText = valArray[0];
    //         tdCaseNumber.innerText = valArray[1];
    //         tdCrimeAgainst.innerText = valArray[2];
    //         tdNeighborhood.innerText = valArray[3];
    //         tdNumberRecords.innerText = valArray[4];
    //         tdOccurDate.innerText = valArray[5];
    //         tdOccurMonth.innerText = valArray[6];
    //         tdOccurTime.innerText = valArray[7];
    //         tdOffenseCategory.innerText = valArray[8];
    //         tdOffenseCount.innerText = valArray[9];
    //
    //         tr.appendChild(tdAddress);
    //         tr.appendChild(tdCaseNumber);
    //         tr.appendChild(tdCrimeAgainst);
    //         tr.appendChild(tdNeighborhood);
    //         tr.appendChild(tdNumberRecords);
    //         tr.appendChild(tdOccurDate);
    //         tr.appendChild(tdOccurMonth);
    //         tr.appendChild(tdOccurTime);
    //         tr.appendChild(tdOffenseCategory);
    //         tr.appendChild(tdOffenseCount);
    //
    //         dataContainer.appendChild(tr);
    //     });
    // });

    // listening for selection
    getTable.addEventListener('click', function() {
       let choice = $("#choice").val();
       console.log(choice);
       if (choice === '1') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2011.csv";
           makeTable(file);
       } else if (choice === '2') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2012.csv";
           makeTable(file);
       } else if (choice === '3') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2013.csv";
           makeTable(file);
       } else if (choice === '4') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2014.csv";
           makeTable(file);
       } else if (choice === '5') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2015.csv";
           makeTable(file);
       } else if (choice === '6') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2016.csv";
           makeTable(file);
       } else if (choice === '7') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2017.csv";
           makeTable(file);
       } else {
           console.log("Something's not right");
       }
     });

    getData.addEventListener('click', function() {
       let choice = $("#choice").val();
       console.log(choice);
       if (choice === '1') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2011.csv";
           makeGraph(file);
       } else if (choice === '2') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2012.csv";
           makeGraph(file);
       } else if (choice === '3') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2013.csv";
           makeGraph(file);
       } else if (choice === '4') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2014.csv";
           makeGraph(file);
       } else if (choice === '5') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2015.csv";
           makeGraph(file);
       } else if (choice === '6') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2016.csv";
           makeGraph(file);
       } else if (choice === '7') {
           let file = "https://s3-us-west-2.amazonaws.com/web-hosted-files/crime_incident_data2017.csv";
           makeGraph(file);
       } else {
           console.log("Something's not right");
       }
   });
});


function makeTable(file) {
    let dataArray = [];
    console.log("Loading the table...");
    d3.csv(file, function(data) {
        // console.log(data);
        dataArray.push(data);
        let tr = document.createElement('tr');
        let tdAddress = document.createElement('td');
        let tdCaseNumber = document.createElement('td');
        let tdCrimeAgainst = document.createElement('td');
        let tdNeighborhood = document.createElement('td');
        let tdNumberRecords = document.createElement('td');
        let tdOccurDate = document.createElement('td');
        let tdOccurMonth = document.createElement('td');
        let tdOccurTime = document.createElement('td');
        let tdOffenseCategory = document.createElement('td');
        let tdOffenseCount = document.createElement('td');

        let valArray = Object.values(data);
        tdAddress.innerText = valArray[0];
        tdCaseNumber.innerText = valArray[1];
        tdCrimeAgainst.innerText = valArray[2];
        tdNeighborhood.innerText = valArray[3];
        tdNumberRecords.innerText = valArray[4];
        tdOccurDate.innerText = valArray[5];
        tdOccurMonth.innerText = valArray[6];
        tdOccurTime.innerText = valArray[7];
        tdOffenseCategory.innerText = valArray[8];
        tdOffenseCount.innerText = valArray[9];

        tr.appendChild(tdAddress);
        tr.appendChild(tdCaseNumber);
        tr.appendChild(tdCrimeAgainst);
        tr.appendChild(tdNeighborhood);
        tr.appendChild(tdNumberRecords);
        tr.appendChild(tdOccurDate);
        tr.appendChild(tdOccurMonth);
        tr.appendChild(tdOccurTime);
        tr.appendChild(tdOffenseCategory);
        tr.appendChild(tdOffenseCount);

        dataContainer.appendChild(tr);
    });
}

function makeGraph(file) {
    return null;
}




// // Original python:
//
// """
// Optional lab
// Sometimes crime does pay
// """
//
//
// def load(path):
//     with open(path, 'r') as f:
//         contents = f.read().replace('"', '')
//         new_contents = contents.split('\n')
//         items = [new_content.split(',') for new_content in new_contents]
//     return items
//
//
// def load_data():
//     print("Which year of crime statistics would you like to analyze? Choose a year between 2011 and 2014 or 'recent' for the most recent data.")
//     choice = input("> ")
//
//     if choice == 'recent':
//         data = load('../../../1 Python/data/crime_incident_data_recent.csv')
//         print("\nYou have chosen to look at the most recent crime data from 2014-2015.")
//     elif choice == '2014':
//         data = load('../../../1 Python/data/crime_incident_data_2014.csv')
//         print("\nYou have chosen to look at crime data from 2014.")
//     elif choice == '2013':
//         data = load('../../../1 Python/data/crime_incident_data_2013.csv')
//         print("\nYou have chosen to look at crime data from 2013.")
//     elif choice == '2012':
//         data = load('../../../1 Python/data/crime_incident_data_2012.csv')
//         print("\nYou have chosen to look at crime data from 2012.")
//     elif choice == '2011':
//         data = load('../../../1 Python/data/crime_incident_data_2011.csv')
//         print("\nYou have chosen to look at crime data from 2011.")
//     else:
//         print("That is not a valid year.")
//         return None
//
//     return data
//
//
// def find_crime_type(data, x):
//     crime_dict = {}
//     for i in range(1, len(data)-1):
//         if data[i][x] not in crime_dict:
//             crime_dict[data[i][x]] = 1
//         else:
//             crime_dict[data[i][x]] += 1
//     return crime_dict
//
//
// # def get_zip(data):
// #     zip_list = []
// #     # zip_dict = {}
// #     for i in range(1, len(data)-1):
// #         zip_list.append(data[4].split(', '))
// #     print(zip_list)
//
//
// def count_all_crimes():
//     """counts the total number of crimes per year, then returns the year with the most crime"""
//     with open('../../../1 Python/data/crime_incident_data_recent.csv', 'r') as f:
//         contents = f.read().replace('"', '')
//         new_contents = contents.split('\n')
//         recent_items = [new_content.split(',') for new_content in new_contents]
//         recent_len = len(recent_items)
//     with open('../../../1 Python/data/crime_incident_data_2014.csv', 'r') as f:
//         contents = f.read().replace('"', '')
//         new_contents = contents.split('\n')
//         items_2014 = [new_content.split(',') for new_content in new_contents]
//         len_2014 = len(items_2014)
//     with open('../../../1 Python/data/crime_incident_data_2013.csv', 'r') as f:
//         contents = f.read().replace('"', '')
//         new_contents = contents.split('\n')
//         items_2013 = [new_content.split(',') for new_content in new_contents]
//         len_2013 = len(items_2013)
//     with open('../../../1 Python/data/crime_incident_data_2012.csv', 'r') as f:
//         contents = f.read().replace('"', '')
//         new_contents = contents.split('\n')
//         items_2012 = [new_content.split(',') for new_content in new_contents]
//         len_2012 = len(items_2012)
//     with open('../../../1 Python/data/crime_incident_data_2011.csv', 'r') as f:
//         contents = f.read().replace('"', '')
//         new_contents = contents.split('\n')
//         items_2011 = [new_content.split(',') for new_content in new_contents]
//         len_2011 = len(items_2011)
//
//     max_list = [recent_len, len_2014, len_2013, len_2012, len_2011]
//
//     if recent_len == max(max_list):
//         return f"\nThe year with the most crime was {2014-2015}, with {recent_len} crimes."
//     elif len_2014 == max(max_list):
//         return f"\nThe year with the most crime was {2014}, with {len_2014} crimes."
//     elif len_2013 == max(max_list):
//         return f"\nThe year with the most crime was {2013}, with {len_2013} crimes."
//     elif len_2012 == max(max_list):
//         return f"\nThe year with the most crime was {2012}, with {len_2012} crimes."
//     elif len_2011 == max(max_list):
//         return f"\nThe year with the most crime was {2011}, with {len_2011} crimes."
//     else:
//         return "Portland is a crime-free paradise!"
//
//
// data = load_data()  # choose which year to look at
// freq_crime_dict = find_crime_type(data, 3)
// hood_crime_dict = find_crime_type(data, 5)
// zip_crime_dict = find_crime_type(data, 6)
// # get_zip(data)
//
// print("The most frequent crimes that year were:")
//
// # find the most common crimes
// tup_crimes = list(freq_crime_dict.items())  # list of tuples
// tup_crimes.sort(key=lambda tup: tup[1], reverse=True)  # sort largest to smallest, based on count
// for i in range(min(30, len(tup_crimes))):  # print the top 30 crimes, or all of them, whichever is smaller
//     print(f"{tup_crimes[i][0]} was committed {tup_crimes[i][1]} times")
//
//
// print("\nThe neighborhoods with the most crime were:")
//
// # find the most crimes per neighborhood
// tup_crimes = list(hood_crime_dict.items())  # list of tuples
// tup_crimes.sort(key=lambda tup: tup[1], reverse=True)  # sort largest to smallest, based on count
// for i in range(min(10, len(tup_crimes))):  # print the top 10 neighborhoods, or all of them, whichever is smaller
//     if 'Unknown/Not Available' in tup_crimes[i][0] or tup_crimes[i][0] == '':
//         pass
//     else:
//         print(f"A crime was committed in the {tup_crimes[i][0]} neighborhood {tup_crimes[i][1]} times")
//
//
// print("\nThe zip codes with the most crime were:")
//
// # find the most crimes per neighborhood
// tup_crimes = list(zip_crime_dict.items())  # list of tuples
// tup_crimes.sort(key=lambda tup: tup[1], reverse=True)  # sort largest to smallest, based on count
// for i in range(min(10, len(tup_crimes))):  # print the top 10 zip codes, or all of them, whichever is smaller
//     if 'OR ' in tup_crimes[i][0]:
//         print(f"A crime was committed in the {tup_crimes[i][0]} zip code {tup_crimes[i][1]} times")
//     else:
//         pass
//
//
// # find the year that had the most crimes
// print(count_all_crimes())
