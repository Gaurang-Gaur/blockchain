// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract testfirst{

    uint256 public favoriteNumber=1000;

    struct People{
      uint256 favoriteNumber;
      string name;
    }
    mapping(string=>uint256) public nameToFavoriteNumber;

    People public person=People({favoriteNumber:81,name:"gaurang"});
    People[] public people; // it's dynamic array 

   function store(uint256 _favoriteNumber) public {
      favoriteNumber=_favoriteNumber;
        // retrieve();
       }



    //    // pure and view 
    // // public view help you to read the function 
       function retrieve() public view returns(uint256){
         return favoriteNumber;
       }
    // // pure function additionally disallow you to read from blockchain state
    //     function add() public pure returns(uint64){
    //         return (1+1);
    //     }
 

// memory , calldata, storage:
// Memory: exist temporary during the transactions during the function call i.e temporay variable that can be modified
// Storage: exist permanent even after the function call eg.Sum variable outside the function
// calldata: similar to memory but can not be reassigned inside the function i.e temporary variable that can be modified; 
        function addPerson(string calldata _name,uint256 _favoriteNumber) public {
          
          People memory newPerson=People({favoriteNumber:_favoriteNumber,name:_name});
          people.push(newPerson);
          nameToFavoriteNumber[_name]=_favoriteNumber;
        }

}