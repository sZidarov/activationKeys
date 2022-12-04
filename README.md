# activationKeys

a function that generates activation keys.

The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
There are several types of instructions, split by ">>>":
•	"Contains>>>{substring}":
	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
	Otherwise, prints: "Substring not found!"
•	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
	All given indexes will be valid.
•	"Slice>>>{startIndex}>>>{endIndex}":
	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
	Both indices will be valid.
