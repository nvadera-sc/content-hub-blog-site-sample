# Content Hub Blog Site Sample
This is a [Next.JS](https://nextjs.org) sample blog site that uses Sitecore Content Hub's CMP module for it's content.

By default, it will display all blogs that have been published to the delivery service ([Experience Edge](https://docs.stylelabs.com/contenthub/4.2.x/content/user-documentation/experience-edge/caas-intro.html)).

An example is deployed at https://content-hub-blog-site-sample.vercel.app.

## Getting Started
### Prerequisites
* Clone this repository.
* Get A Content Hub environment, with CMP and Experience Egde enabled. This could be a [sandbox](create.stylelabs.io).
* Ensure that Content Delivery is enabled according to the [documentation](https://docs.stylelabs.com/contenthub/4.2.x/content/user-documentation/experience-edge/content-delivery/prerequisites.html).
* Ensure that delivery is enabled for Content via Manage > Delviery platform, and check that the configuration suits your needs.

### Generate a GQL Token
This can be done in Content Hub by going to Manage > API Keys. The token can have any name you chose, but should have "Preview" as the purpose.

### Configuration
Update the .env file setting `CH_GQL_TOKEN` to the GQL token you generated earlier, and `CH_BASE_URL` to the url of your Content Hub instance e.g. https://my-instance.sitecoresandbox.cloud

### Run
Start the website by calling

```
npm run dev
```