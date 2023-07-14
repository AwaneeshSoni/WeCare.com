#WeCare.com 

This project is my own idea. I did everything from scratch.
So I started with the UI for the site.
I went to Google, saw some UIs, and did not like any. So, I went to Figma and created one.

Now for the React part, let's keep it organized.

Here are the five parts of it:

1. Reusable Components
2. Displaying the data
3. Taking input
4. Sharing messages on WhatsApp
5. Routing

Let's see each of them one by one.

1. Reusable Components:

So there are three main reusable components.

One is the Logo of the site(green block with WS written in it),
second one is the Post(Blocks with images which you can) ,
and
The third one is DetailedPost (posts open their detailed version with input property).

I created each of these components by their names, and they were imported where needed.

2. Displaying the data:

I stored the data in a data.json file in an array of objects.
Then, the Javascript map() function displayed data using props for each "POST."
After clicking the post, I used the "DetailedPost" component to show the data again using props.
But this time, I used useParams() to know which object to pass as a prop. I used this method because each POST routes to a different URL according to the prop passed to it. I used Id in each object for the difference.


3. Taking input:

Yes, I used useState() for storing the data.

4. Sharing messages on WhatsApp:

I used conditional rendering for share on WhatsApp button.
If the name given is empty, you will not see the share button.
After you click submit, a preview of your message and a share button is displayed.

For sending the message on WhatsApp, I used the react-share library.
I know this is not common.
I had to learn it on my own.

Then I passed the message to Share WhatsApp button.

5. Routing:

I am not changing the header and footer components for routing, so only the components in between them are changed along with the URL.

For general pages like AboutUs and Privacy policy, it's simple routing.
But for each DetailedPost component, I used Dynamic Routing.

Yes, :id is the savior here.

Each Post links to a route with an endpoint having of id of Data.json in place of :id in URL.
Then, using useParams(), I matched which object to pass to DetailedPost.


And at the end, I used useEffect() to scroll the page to the top every time I clicked on an element or input something.

Finally, I deployed it on @vercel

You can see it here: https://lnkd.in/d9pnwZaA
