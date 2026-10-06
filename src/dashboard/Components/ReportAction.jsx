import { useState } from 'react';

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';
import { MoreVertical } from 'lucide-react';
import { LiaEdit } from 'react-icons/lia';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa6';

function ReportAction({ row }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset({ mainAxis: 0, crossAxis: -10 }), flip(), shift()],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  if (!row) return null;

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="cursor-pointer p-2 text-gray-400 rounded-lg transition-all delay-100 duration-150 hover:bg-white/5 hover:text-white"
      >
        <MoreVertical className="w-5 h-5" />
      </button>

      <FloatingPortal>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              dir='rtl'
              className="z-9999 flex w-48 cursor-pointer flex-col items-start space-y-1 overflow-hidden rounded-lg border border-white/10 bg-black p-3 shadow-xl"
            >
              <div className="flex w-full items-center space-x-1 border-b border-white/40 pr-1 pb-1 font-[SamimBold] text-white">
                <p>{row?.author}</p>
              </div>

              <button
                type="button"
                {...getItemProps({
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  },
                })}
                className="flex w-full items-center px-1 py-3 text-base text-white gap-2 hover:bg-white/5 transition"
              >
                <LiaEdit className="h-6.25 w-6.25 text-green-500" />
                <span>ویرایش</span>
              </button>

              <button
                type="button"
                {...getItemProps({
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  },
                })}
                className="flex w-full items-center px-1 py-3 text-base text-white gap-2 hover:bg-white/5 transition"
              >
                <BsFillTrashFill className="h-6.25 w-6.25 text-red-500" />
                <span>حذف</span>
              </button>

              <button
                type="button"
                {...getItemProps({
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  },
                })}
                className="flex w-full items-center px-1 py-3 text-base text-white gap-2 hover:bg-white/5 transition"
              >
                <FaWpforms className="h-6.25 w-6.25 text-white" />
                <span>نمایش</span>
              </button>
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}

export default ReportAction;