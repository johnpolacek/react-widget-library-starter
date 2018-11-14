describe('Widget', function() {

	it('should render', function() {
		cy.visit('./')
		cy.contains('Hi.').should('be.visible')
		cy.contains('This is React.').should('be.visible')
	})

})