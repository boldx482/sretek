import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { MyAuthComponent } from './MyAuthComponent'
import { GoogleApiProvider } from 'react-gapi'
import { createGapiMock } from 'react-gapi/testing'

it('Sign in', async () => {
    const { user } = createGapiMock()

    render(
        <GoogleApiProvider clientId="foo" >
            <MyAuthComponent />
        </GoogleApiProvider>,
    )

    userEvent.click(await screen.findByRole('button', { name: /login/i }))

    act(() => {
        user.grantsScopes?.(true, { name: 'John Doe' })
    })

    expect(await screen.findByText(/Logged in as /)).toHaveTextContent('"John Doe"')
})