# Custom Calendar Project 
### Create a Calendar Component for 2024 - for use by 1000 different companies


- Create a Calendar Component for 2024 with full logic.  
- Once this is ready, this Web Component should be available for use by 1000 different companies to be printed with their own name, logo and styling. 
- For example, Taj Hotels can add the photos of their 12 best hotels and provide this calendar for printing, all within a matter of 5 minutes.

### Breakdown
- My2024Calendar +   
- 12 Personalized Photos +   
- 12 Messages +   
- Company Name+  
- Company Logo +   
- Cover Page (Optional) 

==>CompanyName_2024Calendar

The output of the customization should be sent to the Printer directly for Printing
The binding of the 12+1 pages into a spiral desktop calendar will be a manual process.

Please make suitable assumptions

# Documentation
## Overview
We will be using HTML, CSS, and JS to develop this project.
### The Calendar should be downloadable (ready to print)
- 2 Structural Options:
    1. 12 files compressed to 1 Zip file
    2. 1 file containing 12 pages
- 4 File Type Options:
    - PDF
    - JPG
    - DOCX
    - CDR
### Example
#### File Options using Structure 1
    Calendar.zip:
        Jan_2024_Calendar.pdf ... 
    OR
        Jan_2024_Calendar.jpg ...
    OR
        Jan_2024_Calendar.docx ...
    OR
        Jan_2024_Calendar.cdr ...

#### File Options using Structure 2
        Calendar.pdf
    OR
        Calendar.docx
    OR
        Calendar.cdr
*Note JPG does not support multiple pages*  


## Generic Calendar
### Input: 
- Year 
### Output: 
- Generic Calendar, viewable in 12 different pages
- http://kailashrao.com/calendar/2024/1 --> index.html == January 2024
- 1 Zip File containing 12 CDR files ready to print 
- OR
- 1 CDR file with 12 pages

## Customized Calendar

### Inputs:
- Year
- 12 calendar images
- 1 cover image
- 1 logo image
- 12 messages (1 file)
- 1 configuration file
- 1 Holidays file
    #### 17 Total Files

### Output
- Customized Calendar, viewable in 12 different pages
- http://kailashrao.com/calendar/2024/1 --> index.html == January 2024
- 1 Zip File containing 12 CDR files ready to print 
- OR
- 1 CDR file with 12 pages

### Example:  Taj Hotels
- #### Images:   
        taj_hotels_1.jpg, taj_hotels_2.jpg, taj_hotels_3.jpg, taj_hotels_4.jpg,  
        taj_hotels_5.jpg, taj_hotels_6.jpg, taj_hotels_7.jpg, taj_hotels_8.jpg,  
        taj_hotels_9.jpg, taj_hotels_10.jpg, taj_hotels_11.jpg, taj_hotels_12.jpg  
        

- #### Messages: ``` taj_hotel_messages.txt ``` 
    - 12 lines with 1 message per line

- #### Cover: ``` taj_hotels_cover.jpg ```

- #### Logo: ```taj_hotels_logo.jpg```

- #### Configuration: ```taj_hotels_config.txt``` 
```  
    {  
    "Name" : "Taj Hotels",  
    "Weekly Holiday" : ["sat", "sun"],  
    "Orientation" : 1,   
    "LTR" : Y/N,  
    "Image Dimensions" : "500x500 px"    
    }  
```  
*Weekends/Weekly Holidays can be highlighted if specified in the configuration*  
 *Orientation: (1 == Days on Column Head), (2 == Days on Row Head)*  
 *LTR == Read from Left to Right? --> Yes/No*

- #### Holidays: ```taj_hotels_holidays.txt``` 
``` 
{
"Jan 1" : "New Years"
"Dec 25" : "Christmas",
}
```

#### URL Breakdown
    http://kailashrao.com/calendar/2024/taj-hotels/1  
    http://kailashrao.com/calendar/2024/taj-hotels/2  
    http://kailashrao.com/calendar/2024/taj-hotels/3  
    http://kailashrao.com/calendar/2024/taj-hotels/4  
    http://kailashrao.com/calendar/2024/taj-hotels/5  
    http://kailashrao.com/calendar/2024/taj-hotels/6  
    http://kailashrao.com/calendar/2024/taj-hotels/7  
    http://kailashrao.com/calendar/2024/taj-hotels/8  
    http://kailashrao.com/calendar/2024/taj-hotels/9  
    http://kailashrao.com/calendar/2024/taj-hotels/10  
    http://kailashrao.com/calendar/2024/taj-hotels/11  
    http://kailashrao.com/calendar/2024/taj-hotels/12  
    http://kailashrao.com/calendar/2024/taj-hotels/cover
- Calendar project
- Specified year
- User's Brand/Name
- Number corresponding to month (1 == Jan)

# Development Plan
- The goal is to get a working product as soon as possible
- The product will be very basic first (eg. only generic calendar)
- Each new feature will be added on separate branches

## Order of Features
1. Generic Calendar viewable on webpage
2. Printability of Generic Calendar
3. Personalized Photos
4. Personalized Messages
5. Company Name + Logo
6. Cover Page