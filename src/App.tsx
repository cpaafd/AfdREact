import logo from './logo.svg';
import AfdErrorBoundary from './component/error_boundary/AfdErrorBoundary';
import React, {Suspense} from 'react';
import RestApiService from "./service/restapi/RestApiService";
import RestApiCommonService from "./service/restapi/RestApiCommonService";
import {useEffect, useState, createContext} from "react";
import './App.css';

import AppObjContext from "./context/AppContext";

import RtMainSurround from './gantry/RtMainSurround';


RestApiService.init();
    //https://reactjs.org/docs/hooks-reference.html#usecontext
    //https://reactjs.org/docs/context.html
    /* const RestApiServiceContext = React.createContext(restApiService);
        https://www.w3schools.com/react/react_usecontext.asp
     */

function App(props: any) {

    const appObj = props;
        //AppObjContext.appObj = appObj;

    const pageItemId = appObj.menuId;

    const [menuItemObj, setMenuItemObj] = useState([]);
    const [instructorObjList, setInstructorObjList] = useState([]);
    const [containerObjList, setContainerObjList] = useState([]);

        //function_name=get_site_opinion_table&page_item_id=206&sequence=80&object_id=&object2_id=-1&limit_from=0&day_ago_from=0

    useEffect(() => {
        Promise.all(
            [RestApiService.getPromise(RestApiCommonService.getJos4Menu(pageItemId)),
            RestApiService.getPromise(RestApiCommonService.getInstructorLetterInfo()),
            RestApiService.getPromise(RestApiCommonService.getXxClubPageModule2PageSets(pageItemId))
            ]
        ).then(
            (responseArray) => {
                setMenuItemObj(responseArray[0].data[0]);
                setInstructorObjList(responseArray[1].data);
                setContainerObjList(responseArray[2].data);
            }
        )
    }, []);
  return (
      <>
          <AppObjContext.Provider value={appObj}>
          <Suspense fallback={<div>Loading... </div>}></Suspense>
          <AfdErrorBoundary>
            <h1>App</h1>
          {
              containerObjList?.length > 0 ?
                  (
                      <RtMainSurround
                          menuItemObj={menuItemObj}
                          containerObjList={containerObjList}
                      />
                  ) : (<div>No rows</div>)
          }

          </AfdErrorBoundary>
          </AppObjContext.Provider>
      </>
  );
}

export default App;
