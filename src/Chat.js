import { Component } from "react";


class ChatBot extends Component{


    componentDidMount (){


        // <script type="text/javascript">
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"32d2e91528b6c225c87666a17a1556d68","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    // </script>
    }
    render(){

        return(

            <div>
                <h1>Hi</h1>
            </div>
        )
    }
}

export default ChatBot