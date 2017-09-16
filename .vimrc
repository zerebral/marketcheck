if has_key(g:plugs, 'ale')
  let g:ale_linters['jsx'] = ['standard', 'stylelint']
  let g:ale_linter_aliases = {'jsx': 'css'}
endif
