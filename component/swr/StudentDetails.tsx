import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailsProps {
    studentId: string
}

const MS_PER_HOUR = 60*60*1000

export function StudentDetails ({studentId}: StudentDetailsProps) {
    const {data, error, mutate, isValidating} = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: false,
        dedupingInterval: MS_PER_HOUR
    })

    function handleMutate() {
        mutate({name: 'hello world'}, true)
    }
  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutate}>Change</button>
    </div>
  );
}
