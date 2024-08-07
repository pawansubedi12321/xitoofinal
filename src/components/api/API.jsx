import React from 'react'
import axios from 'axios'
// const url='http://68.183.85.139:9000';
const url='http://localhost:9000';
// office ip port :- 192.168.1.74
// my home ip port :-  172.25.0.1

// const url='http://localhost:9000/api/v1';

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
export const Getassistancelist=()=>`${url}/api/v1/assistance/my?page=1&pageSize=50`;
export const Updatebooking=()=>`${url}/api/v1/booking/`;
export const PendingBooking=()=>`${url}/api/v1/booking/assistance/filter?status=pending&page=1&pageSize=10`
export const OnworkBooking=()=>`${url}/api/v1/booking/assistance/filter?status=ongoing&page=1&pageSize=10`
export const AppointBooking=()=>`${url}/api/v1/booking/assistance/filter?status=appoint&page=1&pageSize=10`
export const CompletedBooking=()=>`${url}/api/v1/booking/assistance/filter?status=completed&page=1&pageSize=10`