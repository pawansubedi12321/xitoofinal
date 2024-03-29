import React from 'react'
import axios from 'axios'
const url='http://192.168.1.74:9000';

// office ip port :- 192.168.1.74
// my home ip port :-  172.25.0.1



let accessToken = localStorage.getItem('accessToken');
export const token = accessToken;
export const Login=()=>`${url}/api/v1/auth/login`;
export const fetchCategoryData = () =>`${url}/api/v1/category/all`;
export const additem=()=>`${url}/api/v1/category/create`;
export const problemlist=()=>`${url}/api/v1/problems/get-all`;
export const addproblem=()=>`${url}/api/v1/problems/create`;
export const getbooking=()=>`${url}/api/v1/booking/get-all/`;
export const deletecategory=()=>`${url}/api/v1/category/`;
export const deleteproblemlist=()=>`${url}/api/v1/problems/`;