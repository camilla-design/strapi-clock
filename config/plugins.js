module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env(AWS_ACCESS_KEY),
        secretAccessKey: env(AWS_ACCESS_SECRET),
        region: AWS_REGION,
        params: {
          Bucket: AWS_BUCKET,
        },
      },
    },
  });