'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TextItems } from '@/lib/types';
import { readPdf } from '@/lib/parse-resume/read-pdf';
import { groupTextItemsIntoLines } from '@/lib/parse-resume/group-text';
import { groupLinesIntoSections } from '@/lib/parse-resume/group-sections';
import { extractResumeFromSections } from '@/lib/parse-resume/extract';
import { cn } from '@/lib/utils';
import { Table, Dropzone } from '@/components/parser';

const RESUME_EXAMPLES = [
  {
    fileUrl: 'al.pdf',
    description: <span>Took from public sources</span>,
  },
  {
    fileUrl: 'jake.pdf',
    description: (
      <span>
        Created with Inhouse Resume Builder -{' '}
        <Link href='/resume-builder'>Link</Link>
      </span>
    ),
  },
];

const defaultFileUrl = RESUME_EXAMPLES[1]['fileUrl'];

export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState(defaultFileUrl);

  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  useEffect(() => {
    async function parse() {
      const textItems = await readPdf(fileUrl);
      setTextItems(textItems);
    }
    parse();
  }, [fileUrl]);

  return (
    <main className='h-full w-full overflow-hidden'>
      <div className='flex gap-x-10'>
        <div className='flex w-1/2 justify-center px-2 md:col-span-3 md:justify-end'>
          <section className='mt-5 grow px-4 md:max-w-[600px] md:px-0'>
            <div className='fixed h-screen w-full max-w-[600px]'>
              <iframe
                src={`${fileUrl}#navpanes=0`}
                className='h-[95%] w-full'
              />
            </div>
          </section>
          <div className='hidden max-w-[45] md:block' />
        </div>
        <div className='flex w-1/2 px-6 text-gray-900 md:col-span-3 md:overflow-y-scroll'>
          <div className='hidden max-w-[45] md:block' />
          <section className='max-w-[600px] grow'>
            <h1 className='!mt-4 text-primary'>Resume Parser Playground</h1>
            <p className='mt-4'>
              This playground showcases the Inhouse resume parser and its
              ability to parse information from a resume PDF. Click around the
              PDF examples below to observe different parsing results.
            </p>
            <div className='mt-3 flex gap-3'>
              {RESUME_EXAMPLES.map((example, idx) => (
                <article
                  key={idx}
                  className={cn(
                    'flex-1 cursor-pointer rounded-md border-2 px-4 py-3 shadow-sm outline-none hover:bg-gray-50 focus:bg-gray-50',
                    example.fileUrl === fileUrl
                      ? 'border-blue-400'
                      : 'border-gray-300'
                  )}
                  onClick={() => setFileUrl(example.fileUrl)}
                  onKeyDown={(e) => {
                    if (['Enter', ' '].includes(e.key))
                      setFileUrl(example.fileUrl);
                  }}
                  tabIndex={0}
                >
                  <h1 className='font-semibold'>Resume Example {idx + 1}</h1>
                  <p className='mt-2 text-sm text-gray-500'>
                    {example.description}
                  </p>
                </article>
              ))}
            </div>
            <div className='mt-3'>
              <Dropzone
                onFileUrlChange={(fileUrl: any) =>
                  setFileUrl(fileUrl || defaultFileUrl)
                }
                playgroundView={true}
              />
            </div>
            <h2 className='!mt-[1.2em]'>Resume Parsing Results</h2>
            <Table resume={resume} />
          </section>
        </div>
      </div>
    </main>
  );
}
