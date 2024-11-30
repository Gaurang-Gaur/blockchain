// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;


// WE ONlY need the gas when we modify the state of blockchain ok!
contract testfirst{

    uint64 public sum=1000;

   function doubleIt(uint64 val) public {
        sum+=val ;
        // retrieve();
       }



       // pure and view these type of function does not charge the gas fee
    // public view help you to read the function 
       function retrieve() public view returns(uint64){
         return sum;
       }
    // pure function additionally disallow you to read from blockchain state
        function add() public pure returns(uint64){
            return (1+1);
        }

}