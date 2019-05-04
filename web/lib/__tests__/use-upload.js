import { useUpload, onEvent } from '../use-upload';

it('it opens cloudinary widget on call', () => {
  window.cloudinary = {
    openUploadWidget: jest.fn()
  };

  const handleSuccess = jest.fn();

  const { openWidget } = useUpload(handleSuccess);
  openWidget();

  expect(window.cloudinary.openUploadWidget).toBeCalledWith(
    expect.any(Object),
    expect.any(Function)
  );
});

it('it runs callback on success', () => {
  const callback = jest.fn();
  const err = null;
  const info = {
    event: 'success',
    info: {
      public_id: 'public-id'
    }
  };

  onEvent(callback, err, info);
  expect(callback).toBeCalledWith('public-id');
});

it('it does not run callback on other events', () => {
  const callback = jest.fn();
  const err = null;
  const info = {
    event: 'failed',
    info: {
      public_id: 'public-id'
    }
  };

  onEvent(callback, err, info);
  expect(callback).not.toBeCalled();
});
