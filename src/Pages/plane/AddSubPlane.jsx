import React, { useState } from 'react';
import { Form, Input, Modal, Checkbox } from 'antd';

const AddSubPlane = ({ openAddModal, setOpenAddModal }) => {
  const [form] = Form.useForm();
  const [showCoupon, setShowCoupon] = useState(false);

  const handleCancel = () => {
    form.resetFields();
    setShowCoupon(false);
    setOpenAddModal(false);
  };

  const handleSubmit = async (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
      <div className="mt-4 mb-6">
        <h2 className="text-center text-xl font-semibold mb-6">
          Subscription: 1 Months Plan
        </h2>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          {/* Price */}
          <Form.Item label="Amount:-" name="price" initialValue={299}>
            <Input
              prefix="$"
              suffix="(-0%)"
              type="number"
              className="py-2"
              disabled
            />
          </Form.Item>

          {/* Coupon Toggle */}
          <div className="flex items-center justify-between mb-2">
            <label className="font-medium">Apply a coupon code</label>
            <Checkbox
              checked={showCoupon}
              onChange={() => setShowCoupon(!showCoupon)}
            />
          </div>

          {/* Coupon Code Input */}
          {showCoupon && (
            <Form.Item name="couponCode" label="Coupon Code">
              <div className="flex ">
                <Input placeholder="Enter your coupon code" className="py-2 rounded-tl rounded-tr-none rounded-br-none rounded-bl" />
                <button
                  type="button"
                  className="bg-[#0091FF] hover:bg-blue-600 rounded-tl-none rounded-tr rounded-br rounded-bl-none text-white px-4 "
                >
                  Apply
                </button>
              </div>
            </Form.Item>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="w-full py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-[#0091FF] text-white rounded-md hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddSubPlane;
