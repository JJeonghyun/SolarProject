// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ISwap{
    function usdtSwap(address _tokenIn,uint256 _amountIn) external;
}