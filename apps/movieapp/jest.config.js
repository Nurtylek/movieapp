module.exports = {
  name: 'movieapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/movieapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
