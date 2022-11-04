import SanityClient from '@sanity/client';

const client = SanityClient({
  projectId: 'fni3zjgq',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'skqsGr0vtgyl81MxOyP8GIWBuP5nRiE0tXu4flpBAWy7kesEi0C98Fq1NSFTEteMw5JMgGeffvtzbZREAZXn93aj69CyHtBPLwOHafojxO7olj0ESlUqhOvuGs9hbBHpCFL8ZoT8jxilsARbkOV14E8rECzN29qV3hfPzmAZuxZcCDdBRgap',
  useCdn: true,
});
export default client;
