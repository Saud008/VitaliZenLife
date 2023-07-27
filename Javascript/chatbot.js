function visible() {
            let chatbox = document.querySelector('.container');
            let closebutton = document.querySelector('.close');
            let chatbutton = document.querySelector('.chat');
            chatbox.style.visibility = "visible";
            closebutton.style.visibility = "visible";
            chatbutton.style.visibility = "hidden";
        }
        function closing() {
            let chatbox = document.querySelector('.container');
            let closebutton = document.querySelector('.close');
            let chatbutton = document.querySelector('.chat');
            chatbox.style.visibility = "hidden";
            closebutton.style.visibility = "hidden";
            chatbutton.style.visibility = "visible";
        }
        know = {
            "Hello": "Hi there , how can I assist you?",
            "Who are you?": "I am VitaliZenLife's Chatbot!",
            "How are you?": "I am fine , what about you?",
            "Tell me something about VitaliZenLife": "VitaliZenLife is a health and wellness website",
            "Who are the founders of VitaliZenLife?": "Founders of VitaliZenLife are Abhinav Choukse , Rahul Birawat and Saud!",
            "Destroy yourself": "As an ai tool , I can't destroy myself and it is against our website's rules and regulations.Please let me know what mistake I have done?",
            "Bye": "Good Bye! Have a good day",
            "What is Yoga?": "Yoga is essentially a spiritual discipline based on an extremely subtle Science which focuses on bringing harmony between mind and body. It is an art and science for healthy living.",
            "What is the meaning of the word 'Yoga'?": "Meaning of Yoga is 'To Unite'",
            "Ok thanks": "Welcome! Please let me know if you have other queries."
        };
        function talk() {
            document.getElementById("chatlog").style.width = "70%";
            let user = document.getElementById("chatbox").value;
            document.getElementById("chatbox").value = "";
            document.getElementById("chatlog").innerHTML += user + "<br>";
            if (user in know) {
                document.getElementById("chatlog").style.transition = "all 0.3s ease";
                document.getElementById("chatlog").innerHTML += know[user] + "<br>";
                document.getElementById("chatlog").style.backgroundColor = "#fff";
                document.getElementById("chatlog").style.color = "black";
                document.getElementById("chatlog").style.fontWeight = "bolder";
            } else {
                document.getElementById("chatlog").innerHTML += "I don't understand";
                document.getElementById("chatlog").style.backgroundColor = "#fff";
                document.getElementById("chatlog").style.color = "black";
                document.getElementById("chatlog").style.fontWeight = "bolder";
                document.getElementById("chatlog").innerHTML += "<br>";
            }
            document.getElementById("chatlog").innerHTML += "<br>";
        }
