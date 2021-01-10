import React, {useState} from "react";
 import ReactPaginate from 'react-paginate';
import  style from "./Paginator.module.css";

type PaginatorType = {
    onClickHandler:(p:number)=>void,
    totalItemsCount:number,
    pageSize:number,
    currentPage:number,
    portionSize:number
};

export const Paginator = React.memo((props:PaginatorType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber,setPortionNumber]=useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1)* props.portionSize + 1;
    let rightPortionPageNumber = portionNumber*props.portionSize;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [arrow,setArrow] = useState(false);
    let onMouseOverHandler = () =>{
        setArrow( true);
    }
    let onMouseLeave = () =>{
        setArrow( false);
    }
    return (
        <div className={style.wrapper}>

            <div className={style.button} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}>{portionNumber > 1 && arrow && '<=' }{portionNumber > 1 && <span onClick={()=>setPortionNumber(portionNumber - 1)}>prev</span>}</div>
            <div className={style.contentWrap} >
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p =>
                <span onClick={() => {
                props.onClickHandler(p)
            }} className={props.currentPage === p ? style.selectedPage : ""}><div  className={style.pageNumber}>{p}</div></span>)}
            </div>
            <div className={style.button} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}><span onClick={()=>setPortionNumber(portionNumber + 1)}>next </span>{arrow && '=>' }</div>

         </div>


 )

});