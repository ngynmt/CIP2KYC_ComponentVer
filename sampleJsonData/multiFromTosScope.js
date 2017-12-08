module.exports = {
  docs: {
    '1': {
      doc_options: [
        {
          doc_option_key: 'TIN_ONLY',
          physical_docs: [],
          social_docs: [],
          virtual_docs: ['TIN']
        },
        {
          doc_option_key: 'EIN_ONLY',
          physical_docs: ['EIN_DOC'],
          social_docs: [],
          virtual_docs: []
        }
      ],
        docs_key: 'BUSINESS_DOCS',
          docs_title: 'Business Documents',
            docs_description: 'Documents needed to verify the business'
    },
    '2': {
      doc_options: [
        {
          doc_option_key: 'SSN_ONLY',
          physical_docs: [],
          social_docs: [],
          virtual_docs: ['SSN']
        },
        {
          doc_option_key: 'FACEBOOK_ONLY',
          physical_docs: [],
          social_docs: ['FACEBOOK'],
          virtual_docs: []
        }
      ],
        docs_key: 'OWNER_DOCS',
          docs_title: 'Business Owner Documents',
            docs_description:
      'Documents needed to verify owners of the business (over 10% shareholders)'
    }
  },
  flows: {
    'ACH-US': {
      'SYNAPSE-US': {
        daily_limit: {
          '1': {
            per_user: 250000
          }
        },
        flow_type: 'PP2P',
          monthly_limit: {
          '1': {
            per_user: 1000000
          }
        },
        platform_daily_limit: 5000000,
          yearly_limit: { }
      }
    },
    'SYNAPSE-US': {
      'ACH-US': {
        daily_limit: {
          '1': {
            per_user: 250000
          }
        },
        flow_type: 'PP2P',
          monthly_limit: {
          '1': {
            per_user: 1000000
          }
        },
        platform_daily_limit: 5000000,
          yearly_limit: { }
      },
      'SYNAPSE-US': {
        daily_limit: { },
        flow_type: 'PP2P',
          monthly_limit: { },
        platform_daily_limit: 50000000,
          yearly_limit: { }
      },
      'WIRE-US': {
        daily_limit: { },
        flow_type: 'PP2P',
          monthly_limit: { },
        platform_daily_limit: 50000000,
          yearly_limit: { }
      }
    },
    'WIRE-US': {
      'SYNAPSE-US': {
        daily_limit: { },
        flow_type: 'PP2P',
          monthly_limit: { },
        platform_daily_limit: 50000000,
          yearly_limit: { }
      }
    }
  },
  permission_title: 'Tier 1',
    permission_description:
  'Tier 1 allows you to open an account and send or receive payments upto $250,000 per day.'
};