const e=({status:s})=>{let a="";switch(s){case"busy":a="bg-warning";break;case"available":a="bg-success";break;default:a="bg-success";break}return{avatarStatus:a}};export{e as useAvatar};
