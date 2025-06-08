                                                Notes:

<!-- / pure and view these type of function does not charge the gas fee -->
<!-- # public view help you to read the function  -->
 <!-- WE ONlY need the gas when we modify the state of blockchain ok! -->
<!-- ! if the gas cost function call the pure function then it will be charge gas fee.. -->

note: public keyword automatically provide the getter function to your variable this amazing :-{} 

!Different type of storage places in EVM:
-->memory , calldata, storage, stack, code,logs
-->memory , calldata, storage:
1.Memory: exist temporary during the transactions during the function call i.e temporay variable that can be modified
2.Storage: exist permanent even after the function call eg.Sum variable outside the function
3.calldata: similar to memory but can not be reassigned inside the function i.e temporary variable that can be modified; 

Note: Data location can only be specified by array(string) , structure and maps so, we need to do use memory keyword before function parameters;

Note:Composability is a system design principle that deals with the inter-relationships of components.
A smart contract are composable with each other mean they can interact with each other using import statements;


//learn about this is great
