// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract testfirst{

    uint64 public sum=1000;

    struct People{
      uint256 favoriteNumber;
      string name;
    }

    People public person=People({favoriteNumber:81,name:"gaurang"});
    People[] public people; // it's dynamic array 


        function addPerson(string memory _name,uint256 _favoriteNumber) public {
          People memory newPerson=People({favoriteNumber:_favoriteNumber,name:_name});
          people.push(newPerson);
        }

}