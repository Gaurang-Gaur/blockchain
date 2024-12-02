

<!-- / pure and view these type of function does not charge the gas fee -->
<!-- # public view help you to read the function  -->
 <!-- WE ONlY need the gas when we modify the state of blockchain ok! -->
<!-- ! if the gas cost function call the pure function then it will be charge gas fee.. -->
note: public keyword automatically provide the getter function to your variable this amazing :-{} 

Different type of storage places in EVM:
 memory , calldata, storage, stack, code,logs
// memory , calldata, storage:
// Memory: exist temporary during the transactions during the function call i.e temporay variable that can be modified
// Storage: exist permanent even after the function call eg.Sum variable outside the function
// calldata: similar to memory but can not be reassigned inside the function i.e temporary variable that can be modified; 

Note: Data location can only be specified by array(string) , structure and maps so, we need to do use memory keyword before function parameters;