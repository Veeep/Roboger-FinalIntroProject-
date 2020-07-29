# _{Mr. Roboger's Neighborhood}_

#### _{A program to return a range of numbers, with some of them exchanged for other phrases}, {July, 2020}_

#### By _**{Chris VanderPluym}**_

## Description

_{This is my final assignment for my Intro to Programming course with Epicodus.  This page requests a number from the user.  The page returns with a list of numbers ranging from 0 to the number that is provided by the user.  Different phrases are set to display instead of some numbers, those that contain within the number 1,2, or 3.}_

## Setup/Installation Requirements

* Clone this repository, 
* open the index.html file
* Follow the Instructions


## Specifications

  * Spec: The program returns a range of numbers from 0 to the users inputted number
      * Input: "4"
      * Output: "0, 1, 2, 3, 4"
  * Spec: All numbers in the range that contain the number 1 (as either part or all of the digit), will instead display the word "Beep!"
      * Input: "3"
      * Output: "0, Beep!, 2, 3"
  * Spec: All numbers in the range that contain the number 2 (as either part or all of the digit), will instead display the word "Boop!"
      * Input: "4"
      * Output: "0, 1, Boop!, 3, 4"
  * Spec: All numbers in the range that contain the number 3 (as either part or all of the digit), will instead display the word "Won't you be my neighbor?"
      * Input: "5"
      * Output:  "0, 1, 2, 3, 4, Won't you be my neighbor?"
  * Spec: If a digit in the range meets more than one of the previous conditions (which convert a digit to a phrase) then the condition that involves the largest replaceable number (1,2 or 3) will be the only condition that is met
      * Input: "13", 
      * Output: "0,Boop!, Beep!, Won't you be my neighbor?, "4, 5, 6, 7, 8, 9, Beep!, Boop!, Won't you be my neighbor?"


## Known Bugs

_{No known bugs }_

## Support and contact details

_{I won't be giving my info out for a project, sorry fans}_

## Technologies Used

_{HTML, CSS w/ bootstrap, JavaScript w/ JQuery, with emphasis on looping and branching}_

### License

*{MIT}*

Copyright (c) 2020 **_{Chris VP}_**