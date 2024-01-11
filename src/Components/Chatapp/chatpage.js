import React from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/659d4a288d261e1b5f51242e/1hjn6jbsf';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
 return (
        <div >
             <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"/>
        </div>
    );
}

export default App;
