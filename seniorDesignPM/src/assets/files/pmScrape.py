# this file will scrape platinum motor's website to
# get the rental car's available and all their details

# import necessary libraries
import bs4
from bs4 import BeautifulSoup
import requests
import re

# get the car names
def getCarNames(rawInput):
    # all results
    allResults = []
    # iterate over each row of car
    for row in rawInput:
        # apply regex to get the name
        result = re.sub(r'<.*?>', '', str(row))
        result = re.sub(r'(\t){5,}', ' ', result)
        result = re.sub(r'^( )|( )$', '', result)
        allResults.append(result)
    return allResults


# get the car images
def getCarImages(rawInput):
    # all results
    allResults = []
    # iterate over each row
    for row in rawInput:
        # apply regex to get the src
        result = re.findall(r'src=".*"', str(row))[0]
        result = re.sub(r'src="', '', result)
        result = re.sub(r'"', '', result)
        allResults.append(result)
    return allResults

# get the car details
def getCarDetails(rawInput):
    # all results
    allResults = []
    # iterate over each row
    for row in rawInput:
        # apply regex to get the details
        result = re.sub(r'<.*?>', '', str(row))
        result = re.sub(r',', '', result)
        result = re.findall(r'[0-9.+,+]+', result)
        # append all numbers to string and separate by pipes |
        finalRow = ''
        for x in range(0, len(result)):
            finalRow += result[x] + '|'
        allResults.append(finalRow)
    return allResults


# ---------------------  BEGIN MAIN DRIVER CODE HERE  -------------------
# get the response
response = requests.get('https://platinummotorcars.com/exotic-car-rentals-dallas.htm')

# get the page data
soup = BeautifulSoup(response.content, 'html.parser')

# get the car names
carNames = soup.findAll("span", {"class": "item-name"})
parsedCarNames = getCarNames(carNames)

# get the car images
carImages = soup.findAll("img", {"class": "img-responsive"})
parsedCarImages = getCarImages(carImages)

# get the car details
carDetails = soup.findAll("div", {"class": "col-sm-7 col-xs-12"})
parsedCarDetails = getCarDetails(carDetails)

# format output
# pipe | will separate attributes for cars
# newline '\n' will separate each row of cars
with open('out.txt', 'w') as f:
    for x in range(0, len(parsedCarNames)):
        f.write(str(parsedCarNames[x]) + '|' + str(parsedCarImages[x]) + '|' + str(parsedCarDetails[x]) + '\n')
