# System Design 

August-September

### System Design Bootcamp with Tala
Takeaways: 
- Deconstructing System: User Stories, Non-functional requirements, Out-of-Scope features 

### Pair learning with Rhema - Design a Facebook Event/ Evite App
Takeaways: 
- No 2 microservices point to the same Database 

### Pair Learning with Jeffery - Design a Shazam App
Takeaways:
- Using circle: client/user, vertical rectangular: LB, horizontal rectangular: microservices, diamond: Database, others (in dash rectangular): other services ie, 3rd party API
- Data types should be included in the Output of the API (ie, `{}` or `[]`)
- Don't use too many response code in the API output, make sure to think what you would like to return. 

### System Design with Jeffery - Design a CraigsList App 
Takeways: 
- Some system can choose between either a non-relational or relational database 
- Normalization in Database (SQL)
- Image Obj Store should be pointing to the "Listing Service" (images can be directly uploaded without going through an upload service)

### System Design with Justin Voskuhl - Design a food delivery App 
Takeaways: 
- Think about how the frontend should be doing to resolve the system failure situation!! - automatic retries! - why cant we retry a ton of time? - really hard to bring the server back up
- REST vs GRPS 
- Encrypted Data Flow (HTTPS - why?)