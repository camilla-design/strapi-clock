module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIAWPCLKXNK2BAMIEDY'),
        secretAccessKey: env('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'),
        region: 'eu-north-1',
        params: {
          Bucket: 'heals-shop-uploder',
        },
      },
    },
  });

