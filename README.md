# InterviewBase

The tasks below require you to utilize a GIT repository for each subproject.
This repository must contain source code which you will write.
Please read this document thoroughly, and ask for clarifications if needed.

In all cases, anyone should be able to run the project by
running the following commands:

$ cd PROJECT_DIR
$ npm install
$ npm update

followed by

$ npm start

to start each application.

PRELIMINARY:

It is assumed that you are familiar with git and Node.JS

All code must follow the following conventions.
* INDENT must be 2 SPACE characters
* Class names must be in CapitalCamelCaps
* Public member function names must be in lowerCaseCamelCaps()
* Global variables and constants must be in ALL_CAPS
* Local variables can be in lower case, but do try to still use descriptive
  names.
* Public data members should also be in lowerCaseCamelCaps
* All commits must have at least one clear English sentence that describe
  what the commit is doing to the source code.
* You should initialize .gitignore file so that the local npm package
  directories are not included in the repo.
* Do try hard to use the node.js document generation tags in your comments
* It's expected that you'll crib code from the Internet. However, you MUST
  disclose the source and fully detail your modifications in your commits.
* You must strike a balance between over-writing, and doing the bare minimum.
  Some amount of thought into Object Orientation and avoiding "bad code
  smells" is expected.
* Incorporating a huge third party library that contains a superset of the
  requirements is certainly possible but discouraged. Your coding ability *must* be
  amply displayed, not someone else's.
* Cleanliness of the code, as well as the organization of the code will count
  a lot.
* A single commit with everything added all at once will be frowned upon.
  The progress of your work should be apparent by examining the commit logs.
  HINT: Do try to make each commit a logical unit, and avoid committing unrelated
  stuff. This will go a long way to give the reviewer assurances as to the
  bona-fides of your work.


TASK 1: Develop a nearly-hard-coded GUI.

This GUI will be run via the following commands:

$ cd interviewbase/gui
$ npm start

The JSON file FakeURLs.json describes a bunch of URLs in tree form.
Please create a nearly static GUI within node.js that resembles the attached
screen shot. (You don't need to add in all the buttons in the screenshot!)

Description of FakeURLs.json
The "nodes" object contains a list of "nodes", indexed from 0.
The fields are "type", "parent", and "size"
If the type of 4 stands for a "directory", and a type of 3 stands for a regular
(e.g. non directory).

The parent field tells the index of the node that is the direct parent of the node.
Note that the first node has no parent field because its the "root" node.
All other nodes have parent of 0, 1, or 2).

The base line interactivity is that you should be able to switch the GUI back
and forth from "list" form to a Tree form. In the list form (pictured), the
GUI must have a scroll-able list that can be scrolled to show all of the URLs,
even if the GUI is resized to be relatively small.  In Tree form, there should
be some sort of "folder" view that can be collapsed and expanded at will.  In
both forms, the GUI must display the "fullname" field as well as the size
field.  The fullname field should be displayed in fixed width font.

Please make sure to engineer the code such that modifying the JSON updates
the displayed information on the GUI. It should be possible to change
the JSON and have it show up immediately on the displayed GUI.

Hint: You'll probably want to rename the file FakeURLs.json to something
else, as well as modify it.

The GUI should have "QUIT" button, which, when pressed, should cleanly quit
the GUI.

Even though this is a 95% hard-coded GUI, you should take care to use the
proper Node.JS style of encoding CSS as well as utilize proper object oriented
way from preact/react or similar code base.

For CSS, feel free to adopt BEM style or any other widely accepted method of
organizing them.




TASK 2: Basic Server Client sending messages to each other via NPM, over TCP sockets.

There should be two separate apps, called client and server.
First is a server which will be executed via npm like

$ cd interviewbase/server
$ npm start

The server then will start a simple GUI

node.js standalone GUI with one "QUIT" button which will quit the server.  It
should have two text dialogs ("HOST:" and "PORT:") which will be used to enter
an IP address and port for which the server should listen on (TCP).  and a
"LISTEN" button. Once the user has entered an IP address (say "127.0.0.1") and
a port number (say 8801), and the LISTEN button is pressed, server should wait
for incoming TCP connections on the specified HOST and print out on to the GUI
window the list of incoming lines received in socket.

Once a TCP connection is established, the GUI should present a new text dialog
("Input text to send:") with a "SEND" button which will send back on the
socket a message that was inputted. The "SEND" button can be pressed multiple
times to send different messages.

You should pick a simple methodology for printing out any received messages on
the socket. The received text must be shown somehow on the GUI, and it must be
able to show the lines as it arrives (until the "QUIT" button is pressed). For
example, you can use a large square box that lists the 10 most recent lines
received.  You can also use an "alert" window that will temporarily show an
incoming line for a few seconds and then disappears.  You should take care to
make sure that the app can asynchronously display incoming lines of text
without blocking. It should be possible for both client and server to be
sending and receiving at (nearly) the same time. The app should quit cleanly
when the QUIT button is pressed.

Also, have the server periodically ping the client with a small "sequence number"
If such a sequence number is received by the server from the client, it
should be displayed separately (like a stopwatch clock). This sequence
number should be out-of-band from the text messages being sent/received, but
must be sent over the same socket. The server (and client) must be able to
distinguish such pings from the actual text messages being sent and received.


The app should quit cleanly when the QUIT button is pressed.

BONUS:
* Have the server create a new window instance for every connection, so that
  this new window display incoming text on this particular connection only.
  (This actually might be simpler to code, albeit it will take a few more lines)
* Have the GUI display (or otherwise notify) if the connecting client has
  closed the connection. After the client quits, there will be no more
  incoming text on this TCP connection, so the "SEND" button can be grayed out.
* Place a sliding bar which will control the frequency of ping messages sent
  by the server to the client. The bounds can be 0.1 second to 10 seconds.
  Sliding the bar on the server side should increase or decrease the
  frequency of the pings sent by the server to the client.

The second will be executed similarly.
$ cd interviewbase/client
$ npm start

The Client app should also start a standalone window via node.js
It should have a "QUIT" button, a text dialog ("HOST:" ) for
entering an ip address, a second text dialog ("PORT:") for
entering a port number, and a "CONNECT" button.  Once the connect button is
pushed, the client app should connect to the specified IP address and port
over TCP and then display a third text dialog "Input text to send:" and a SEND
button. Once some text is inputted and the "SEND" button is pressed, the
inputted text should be sent to the server.
The client should also print any lines received on the socket, just like the
server.

Just like the server, you should pick a simple methodology for printing out
any received messages on the socket. The received text must be shown somehow
on the GUI, and it must be able to show the lines as it arrives (until the
"QUIT" button is pressed). For example, you can use a large square box that
lists the 10 most recent lines received.  You can also use an "alert" window
that will temporarily show an incoming line for a few seconds and then
disappears.  You should take care to make sure that the app can asynchronously
display incoming lines of text without blocking.

Also, have the client ping the server periodically with a small sequence number.
If such a sequence number is received by the client from the server, it
should be displayed separately (like a stopwatch clock). This sequence
number should be out-of-band from the text messages being sent/received, but
must be sent over the same socket. The server (and client) must be able to
distinguish such pings from the actual text messages being sent and received.


The app should quit cleanly when the QUIT button is pressed.


BONUS:
* if the Client is unable to connect after a short period of time, it should
  notify the user somehow, and allow the user to modify the IP address/port
  before pressing "CONNECT" again
* Place a sliding bar which will control the frequency of ping messages sent
  by the client to the server. The bounds can be 0.1 second to 10 seconds.
  Sliding the bar on the client side should increase or decrease the
  frequency of the pings sent by the client to the server.
