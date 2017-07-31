Ultimate Weather Dashboard
Well as per the task given, the tech stack I chose to build the ultimate weather dashboard is
as follows
1. React (User Interface)
2. Redux (State Management)
3. Axios (Promise based ajax calls)
4. Styled Components (Inline CSS styling)
Problem Statement
The problem I encountered during development was the https://www.metaweather.com/
api/. Seems like the API isn’t configured to support https://developer.mozilla.org/en-US/
docs/Web/HTTP/Access_control_CORS.
Experiment
So I tried out with another one, Open Weather API, which has CORS enabled by default. Prior
to that, I tried resolving the issue buy setting necessary headers in the Ajax request
configuration, which quite didn’t work out.Also tried out the no-cors mode, which didn’t workout as well. I used both axios and the
native fetch api to make ajax calls, of which both didn’t work with the MetaWeather API.
However, when I swapped it with Open Weather API, everything seemed to work well.
The former two trials failing lead me to think there must be some problem with my local
development server. So I tried configuring my local dev server to proxy the request, which
didn’t work out as well.
So after a little bit of fiddling and getting my hands dirty, I tried it out with an online coding
interface, like JSBin and CodePen, thinking my local dev host isn’t configured properly or
there might be something wrong with the proxy server (which failed me again).
Implementation Doubt
After spending substantial amount of time figuring out the problem, I tried mailing the guy
about the CORS issue, and voila, the server doesn’t to be CORS enabled, which makes it
difficult to get the data in dev mode, which makes it even difficult to build the UI since there’s
no data.
Well I could have looked into the response and created a snapshot of mock data, but again,for a simple test like this, I didn’t want to make the development process complex, rather Id
like to focus more on the UI and other nifty details than spending time on figuring out how to
get the necessary data needed to power up the UI.
The Open Weather API has a different signature when compared to the Meta Weather API.
Also the 5-day forecast has different endpoints with a 3 hour delay as per my knowledge.
My Question is like if we should i stick to meta weather api or open weather api to build this
application ?
These are just my thoughts that have come during development phase .
I am so curious and eager to develop these further . Please get me know .


INSTRUCTIONS TO RUN CODE :

PLEASE PULL THE CODE AND RUN IN THE JS BIN SELECTING JQUERY PLUGIN AND PLEASE CHECK THE DOCUMENT ATTACHED IN THE MAIL FOR THE SCREENSHOTS .
