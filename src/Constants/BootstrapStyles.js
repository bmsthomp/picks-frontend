import React from 'react';

export const TableStyle = () => {
  return (
    <style type="text/css">{`
    .table-custom {
        margin-top: 50px;
    }`}
    </style>
  )
}

export const NavbarStyle = () => {
  return (
    <style type="text/css">{`
    .navbar-custom {
        margin-bottom: 0px;
        background-color: #eee;
        color: black;
    }
    .navbar-custom>.container {
      margin-right: 5px;
    }
    .navbar-collapse {
      margin-bottom: 0px;
      margin-right: 0px;
      background-color: #eee;
      color: black;
    }
    .navbar-toggle {
      background-color: #ddd;
      border: none;
    }
    .icon-bar {
      background-color: #888;
    }`}
    </style>
  )
}
