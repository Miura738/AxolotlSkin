import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {

    if (request.nextUrl.pathname.startsWith('/install')) {


        if (false) {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    }
}
