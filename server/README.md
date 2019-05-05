# PLAN
## pg database tables
#### postgresql - raw sql queries

- 4 models minimum = USERS, BOARDS, LISTS, CARDS
	- maybe create separate account model with FK on user model ?
- // TODO
	- choose btwn text vs varchar with/without limits ?
	- check pgsql better practices, update db

|				 USER  						| 		  	 BOARD			  	 | 			 LIST 				      |        CARD           |
|				 		---	  	    	|					---					  	|				       -				  	|	     			---	      	|
| 	PK / id / serial      | 	PK / id / serial  		|  			PK / id / serial  	| PK / id / serial      |
|     username / TEXT     | 		title / TEXT  			|				title / TEXT	   	 | 			title / TEXT		  |
|   password / varchar    |			info / TEXT		  	  | 			order / INT				 | 				order / INT 	  |
|  email / varchar(255)   | FK user_id REF user(id) |FK board_id REF board(id) | FK list_id REF list(id) |
| created_at / timestamp  | created_at / timestamp  | created_at / timestamp  |  created_at / timestamp  |
| modified_at / timestamp | modified_at / timestamp | modified_at / timestamp |  modified_at / timestamp |



## api/routes
 #### express + pg-promise
- dependencies:
	- jsonwebtoken (jwt server-side)
	- body-parser
	- cors
- future:
	- joi for form input validation? (or do custom util file)
	- logger
	