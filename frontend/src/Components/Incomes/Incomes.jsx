import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { useGlobaContext } from '../../context/globalContext'

function Income() {

const {addIncome} = useGlobaContext()

  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-content">
                <div className="form-container">
                    <div className="incomes">

                    </div>
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}


const IncomeStyled = styled.div`



`

export default Income