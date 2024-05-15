const testForm = {
  formName: 'Turun yliopisto: hakemuksen perustiedot',
  sections: [
    {
      sectionName: 'Henkilötiedot',
      inputs: [
        {
          type: 'text',
          label: 'Etunimi',
          required: true,
        },
        {
          type: 'text',
          label: 'Sukunimi',
          required: true,
        },
        {
          type: 'dropdown',
          label: 'Sukupuoli',
          options: ['Mies', 'Nainen', 'Muu'],
          required: true,
        },
      ],
    },
    {
      sectionName: 'Yhteystiedot',
      inputs: [
        {
          type: 'text',
          label: 'Sähköpostiosoite',
          validator: {
            validatorType: 'email',
            validatorValue: '',
          },
          required: true,
        },
        {
          type: 'text',
          label: 'Puhelinnumero',
          validator: {
            validatorType: 'number',
            validatorValue: '',
          },
          required: false,
        },
        {
          type: 'text',
          label: 'Postiosoite',
          validator: {},
          required: true,
        },
      ],
    },
    {
      sectionName: 'Ylimääräistä tietoa',
      inputs: [
        {
          type: 'text',
          label: 'Harrastukset',
          required: false,
        },
        {
          type: 'checkbox',
          label: 'Suoritetut tutkinnot',
          options: ['Peruskoulu', 'Lukio', 'Ammattikoulu', 'Alempi korkeakoulututkinto', 'Ylempi korkeakoulututkinto'],
          required: true,
        },
        {
          type: 'file',
          label: 'CV',
          required: false,
        },
        {
          type: 'file',
          label: 'Korkein tutkintotodistus',
          required: true,
        },
      ],
    },
  ],
  inheritedForms: [],
};

export default testForm;
