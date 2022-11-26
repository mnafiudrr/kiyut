const image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjmtpKYJpCvCXEcNp3zzOSED-FjnP4UsrRg&usqp=CAU`;
const dummy_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const dummy_image = 'https://via.placeholder.com/400x400.png/0077ff?text=animals+veritatis';
const dummy_video = 'https://www.youtube.com/watch?v=6TH6Dk8KySE';

export const quis_content_sample = [
  {
    question: 'Pertanyaan 1',
    options: ['Jawaban 1A', 'Jawaban 1B', 'Jawaban 1C'],
    key: 'Jawaban 1A',
  },
  {
    question: 'Pertanyaan 2',
    options: ['Jawaban 2A', 'Jawaban 2B', 'Jawaban 2C'],
    key: 'Jawaban 2A',
  },
  {
    question: 'Pertanyaan 3',
    options: ['Jawaban 3A', 'Jawaban 3B', 'Jawaban 3C'],
    key: 'Jawaban 3A',
  },
  {
    question: 'Pertanyaan 4',
    options: ['Jawaban 4A', 'Jawaban 4B', 'Jawaban 4C'],
    key: 'Jawaban 4A',
  },
  {
    question: 'Pertanyaan 5',
    options: ['Jawaban 5A', 'Jawaban 5B', 'Jawaban 5C'],
    key: 'Jawaban 5A',
  },
  {
    question: 'Pertanyaan 6',
    options: ['Jawaban 6A', 'Jawaban 6B', 'Jawaban 6C'],
    key: 'Jawaban 6A',
  },
  {
    question: 'Pertanyaan 7',
    options: ['Jawaban 7A', 'Jawaban 7B', 'Jawaban 7C'],
    key: 'Jawaban 7A',
  },
  {
    question: 'Pertanyaan 8',
    options: ['Jawaban 8A', 'Jawaban 8B', 'Jawaban 8C'],
    key: 'Jawaban 8A',
  },
  {
    question: 'Pertanyaan 9',
    options: ['Jawaban 9A', 'Jawaban 9B', 'Jawaban 9C'],
    key: 'Jawaban 9A',
  },
  {
    question: 'Pertanyaan 10',
    options: ['Jawaban 10A', 'Jawaban 10B', 'Jawaban 10C'],
    key: 'Jawaban 10A',
  },
];

export const quis_list_static = [
  {
    id: '1',
    title: 'Quiz 1',
    logo: image,
  },
  {
    id: '2',
    title: 'Quiz 2',
    logo: image,
  },
  {
    id: '3',
    title: 'Quiz 3',
    logo: image,
  },
  {
    id: '4',
    title: 'Quiz 4',
    logo: image,
  },
  {
    id: '5',
    title: 'Quiz 5',
    logo: image,
  },
  {
    id: '6',
    title: 'Quiz 6',
    logo: image,
  },
  {
    id: '7',
    title: 'Quiz 7',
    logo: image,
  },
  {
    id: '8',
    title: 'Quiz 8',
    logo: image,
  },
  {
    id: '9',
    title: 'Quiz 9',
    logo: image,
  },
  {
    id: '10',
    title: 'Quiz 10',
    logo: image,
  },
];

export const materi_list_static = [
  {
    id: '1',
    title: 'Materi 1',
    logo: image,
  },
  {
    id: '2',
    title: 'Materi 2',
    logo: image,
  },
  {
    id: '3',
    title: 'Materi 3',
    logo: image,
  },
  {
    id: '4',
    title: 'Materi 4',
    logo: image,
  },
  {
    id: '5',
    title: 'Materi 5',
    logo: image,
  },
  {
    id: '6',
    title: 'Materi 6',
    logo: image,
  },
  {
    id: '7',
    title: 'Materi 7',
    logo: image,
  },
  {
    id: '8',
    title: 'Materi 8',
    logo: image,
  },
  {
    id: '9',
    title: 'Materi 9',
    logo: image,
  },
  {
    id: '10',
    title: 'Materi 10',
    logo: image,
  },
];

const content_dummy = [
  {
    content_type_id: 1,
    value: dummy_text,
  },
  {
    content_type_id: 2,
    value: dummy_image,
  },
  {
    content_type_id: 1,
    value: dummy_text,
  },
  {
    content_type_id: 2,
    value: dummy_image,
  },
  {
    content_type_id: 1,
    value: dummy_text,
  },
  {
    content_type_id: 2,
    value: dummy_image,
  },
]

export const materi_sample = {
  id: '1',
  title: 'Materi Sample',
  logo: image,
  header: dummy_image,
  contents: [
    {
      content_type_id: 2,
      value: dummy_image,
    },
    {
      content_type_id: 3,
      value: dummy_video,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
  ],
  subMateris: [
    {
      id: 1,
      title: 'Sub Materi 1',
      contents: [
        {
          content_type_id: 2,
          value: dummy_image,
        },
        {
          content_type_id: 1,
          value: dummy_text,
        },
        {
          content_type_id: 1,
          value: dummy_text,
        },
      ],
      subSubMateris: materi_list_static
    },
    {
      id: 2,
      title: 'Sub Materi 2',
      contents: [
        {
          content_type_id: 2,
          value: dummy_image,
        },
        {
          content_type_id: 1,
          value: dummy_text,
        },
        {
          content_type_id: 1,
          value: dummy_text,
        },
      ],
      subSubMateris: materi_list_static
    },
  ]
}

export const sub_materi_sample = {
  id: '1',
  title: 'Sub Materi Sample',
  logo: image,
  header: dummy_image,
  contents: [
    {
      content_type_id: 2,
      value: dummy_image,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 2,
      value: dummy_image,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
    {
      content_type_id: 1,
      value: dummy_text,
    },
  ],
}